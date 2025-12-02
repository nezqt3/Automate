export default function Costs() {
  const services = [
    {
      id: 0,
      title: "БАЗОВЫЙ",
      cost: "19 000 ₽",
    },
    {
      id: 1,
      title: "ОПТИМАЛЬНЫЙ",
      cost: "35 000 ₽",
    },
    {
      id: 2,
      title: "ПРЕМИУМ",
      cost: "59 000 ₽",
    },
    {
      id: 3,
      title: "ИНДИВИДУАЛЬНО",
      cost: "ОТ 75 000 ₽",
    },
  ];

  return (
    <div className="costs">
      <div className="costs-header">
        <h2>ПАКЕТЫ И СТОИМОСТЬ</h2>
        <p>
          Выберите подходящий пакет автоматизации или закажите индивидуальный
          расчет. Мы не навязываем лишнего — только то, что принесет результат
          именно вам.
        </p>
      </div>

      <table className="costs-table">
        <thead>
          <tr>
            <th>Название</th>
            <th>Выбрать</th>
            <th>Цена</th>
          </tr>
        </thead>

        <tbody>
          {services.map((elem) => {
            return (
              <tr>
                <td>
                  <h3>{elem.title}</h3>
                </td>
                <td>
                  <button>Automate</button>
                </td>
                <td>
                  <p>{elem.cost}</p>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
