import 'bulma/css/bulma.css';
import './App.scss';
import { useState } from 'react';

export const goods = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

export const App = () => {
  const [value, setValue] = useState('Jam');

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {value === '' ? 'No goods selected' : `${value} is selected`}

        {value !== '' && (
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={() => {
              setValue('');
            }}
          />
        )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map(item => (
            <tr
              data-cy="Good"
              key={item}
              className={value === item ? 'has-background-success-light' : ''}
            >
              <td>
                <button
                  data-cy={value === item ? 'RemoveButton' : 'AddButton'}
                  type="button"
                  className={value === item ? 'button is-info' : 'button'}
                  onClick={() => {
                    if (value === item) {
                      setValue('');
                    } else {
                      setValue(item);
                    }
                  }}
                >
                  {value === item ? '-' : '+'}
                </button>
              </td>

              <td data-cy="GoodTitle" className="is-vcentered">
                {item}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};
