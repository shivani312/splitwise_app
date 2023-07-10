import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { isEmpty } from 'lodash';
import { v4 as uuidv4 } from 'uuid';

import { IGroup } from '../interface/expense.interface';

const Group: React.FC = () => {
 
  const [groups, setGroups] = useState<IGroup>({} as IGroup);
  const navigate = useNavigate();

  useEffect(() => {
    const storedGroups = localStorage.getItem('groups');
    if (storedGroups) {
      setGroups(JSON.parse(storedGroups));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('groups', JSON.stringify(groups));
  }, [groups]);

  useEffect(() => {
    const defaultGroupMembers = [
      {id:'1',name: 'Shivani'},
      {id:'2',name:'Sapna'},
      {id:'3',name:'Kinjal'},
      {id:'4',name:'Om'},
      {id:'5',name:'Foram'}
      {id:'6',name:'Shruti'}
    ];
    const groupId = uuidv4();
    const groupName = 'Buddies';
    const newGroup: IGroup = {
      id: groupId,
      name: groupName,
      members: defaultGroupMembers,
    };
    setGroups({...newGroup});
  }, []); 

  return (
    <div className='container'>
      <p className='font-size--30 font--bold text--center mb--20'>Splitwise Application</p>
      <div>
        <p className='font--semi-bold mb--15'>Groups</p>
        {!isEmpty(groups) && (
                <div  className='group-wrapper cursor--pointer' onClick={(()=> navigate('/expense',{state: {members:groups.members}}))}>
                    <p>{groups.name}</p>
                    <p>No of Member : {groups.members.length}</p>
                </div>
            )
        }
      </div>
    </div>
  );
};

export default Group;
