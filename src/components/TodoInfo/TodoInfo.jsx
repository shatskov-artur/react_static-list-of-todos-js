import { UserInfo } from '../UserInfo/UserInfo';
import usersFromServer from '../../api/users.json';

export const TodoInfo = ({ todo }) => {
  return (
    <article className={`TodoInfo ${todo.completed ? "TodoInfo--completed" : ''}`}>
          <h2 className="TodoInfo__title">{todo.title}</h2>

            <UserInfo user={usersFromServer.find((user) => user.id === todo.userId)} />
        </article>
  )
};
