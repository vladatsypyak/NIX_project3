import { PieChart } from 'react-minimal-pie-chart';

function Chart(props) {
    let color = props.correct >= 4 ? "green" :
        props.correct >= 2 ? " gold": "red"
    return (
        <div className={"pie_container"}>
            <PieChart
                label={({ dataEntry }) => {
                    return dataEntry.percentage
                }}
                data={[
                    { title: 'One', value: props.correct, color: `${color}` },

                ]}

                style={{
                    fontFamily:
                        '"Nunito Sans",  Helvetica, Arial, sans-serif',
                    fontSize: '8px',
                    width: "200px",

                }}
                className={"chart"}
                totalValue={5}
                startAngle={180}
                // totalValue={100}
                lineWidth={20}
                labelStyle={{
                    fontSize: '25px',
                    fontFamily: 'sans-serif',
                    fill: `${color}`,
                }}
                labelPosition={0}
            />
        </div>
    )
}

export default Chart