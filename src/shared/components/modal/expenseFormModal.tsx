import React, { useEffect, useState } from "react";
import { Form, Formik } from "formik";
import { v4 as uuidv4 } from "uuid";
import { Modal } from "antd";
import { useDispatch } from "react-redux";

import * as actionTypes from "../../../store/actionTypes";
import {
    IDropDownOption,
    IExpense,
    IUser,
} from "../../../features/expenseCard/interface/expense.interface";
import Input from "../input/formikInput";
import { ReactSelect } from "../dropDown/reactSelect";
import { createAction, selectedOption } from "../../util/utility";
import { ExpenseFormValidation } from "../../constants/validationSchema";

interface IProps {
    isModalOpen: boolean;
    onAddExpense: (value: IExpense) => void;
    member: IUser[];
    closeModel: () => void;
}

const initialValue = {
    description: "",
    payer: "",
    participants: [],
    amount: null,
};
const ExpenseForm: React.FC<IProps> = (props) => {
    const { isModalOpen, onAddExpense, member, closeModel } = props;

    const [filters, setFilter] = useState<IDropDownOption[]>([]);
    const dispatch = useDispatch();

    useEffect(() => {
        let filterData: IDropDownOption[] = [];
        member.length > 0 &&
            member.map((data: IUser) => {
                filterData.push({
                    label: data.name,
                    value: data.name,
                });

                return filterData;
            });
        setFilter([...filterData]);
        // eslint-disable-next-line
    }, []);

    const handleAddExpense = (value: any) => {
        if (value) {
            const data: any = [];
            const participantsCount = value.participants.length;
            value.participants.map((name: string) =>
                data.push({
                    name: name,
                    splitAmount: parseFloat(
                        (parseFloat(value.amount) / participantsCount).toFixed(
                            2
                        )
                    ),
                })
            );
            const newExpense: IExpense = {
                id: uuidv4(),
                description: value.description,
                amount: parseFloat(value.amount),
                payer: value.payer,
                participants: data,
                createdDate: new Date(),
                isSettled: false,
                splitAmount: parseFloat(
                    (parseFloat(value.amount) / participantsCount).toFixed(2)
                ),
            };
            dispatch(createAction(actionTypes.ADD_EXPENSE, newExpense));
            onAddExpense(newExpense);
            closeModel();
        }
    };

    const modalFooter = null;

    return (
        <>
            <Modal
                title="Add Expense"
                open={isModalOpen}
                footer={modalFooter}
                onCancel={closeModel}
            >
                <Formik
                    initialValues={initialValue}
                    validateOnChange={true}
                    validateOnBlur={true}
                    validationSchema={ExpenseFormValidation}
                    onSubmit={(values, { resetForm }) => {
                        handleAddExpense(values);
                        resetForm();
                    }}
                >
                    {({ setFieldValue, values }) => (
                        <Form>
                            <div className="form_section flex flex--column align-items--center mt--15 mb--20">
                                <Input
                                    type="text"
                                    name="description"
                                    className="form_field team-form_field flex align-items--center"
                                    autoComplete="off"
                                    placeholder="Enter description"
                                    value={values.description}
                                    title="Description"
                                    autoFocus
                                    max={40}
                                    onChange={(value) =>
                                        setFieldValue("description", value)
                                    }
                                    isErrorShow
                                />
                                <Input
                                    type="number"
                                    name="amount"
                                    className="form_field team-form_field mt--30 flex align-items--center"
                                    autoComplete="off"
                                    value={values.amount}
                                    placeholder="Enter amount($0.00)"
                                    title="Amount"
                                    max={20}
                                    onChange={(value) =>
                                        setFieldValue("amount", Number(value))
                                    }
                                    isErrorShow
                                />
                                <ReactSelect
                                    name="payer"
                                    options={filters}
                                    placeholder="Select who paid"
                                    title="Who paid"
                                    selectedValue={selectedOption(
                                        filters,
                                        values.payer
                                    )}
                                    onChange={(options: any) => {
                                        setFieldValue("payer", options.value);
                                    }}
                                    className="form_field team-form_field mt--30"
                                    isErrorShow
                                />
                                <ReactSelect
                                    name="participants"
                                    options={filters}
                                    placeholder="Select participants"
                                    title="Participants"
                                    selectedValue={selectedOption(
                                        filters,
                                        values.participants
                                    )}
                                    onChange={(options: any) => {
                                        setFieldValue(
                                            "participants",
                                            options.map(
                                                (option: IDropDownOption) =>
                                                    option.value
                                            )
                                        );
                                    }}
                                    className="form_field team-form_field mt--30"
                                    isErrorShow
                                    isMulti
                                />

                                <div className="mt--30">
                                    <button
                                        className="btn btn--bg"
                                        type="submit"
                                    >
                                        Add
                                    </button>
                                </div>
                            </div>
                        </Form>
                    )}
                </Formik>
            </Modal>
        </>
    );
};

export default ExpenseForm;
