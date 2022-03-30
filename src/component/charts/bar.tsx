import React, { ReactNode, useEffect, useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, RadialLinearScale, Filler, PointElement, LineElement, BarElement, CategoryScale, LinearScale } from "chart.js";
import { Bar, Doughnut, Radar } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend, RadialLinearScale, Filler, PointElement, LineElement, BarElement, CategoryScale, LinearScale);

interface BarChartProps {
    labelsprop: string[] | [];
    datasetsprop: dataset[] | [];
	classNames? : string;
	options? : Object
}

interface dataset {
    label: string;
    data: number[];
    backgroundColor?: string[];
    borderColor?: string[];
}

const BarChartComponent: React.FC<BarChartProps & React.HTMLAttributes<HTMLDivElement>> = ({labelsprop, datasetsprop, options, classNames}) => {
	const [labels, setLabels] = useState<string[] | []>(labelsprop);
	const [datasets, setDatasets] = useState<dataset[] | []>(datasetsprop);

	useEffect(() => {
		setLabels(labelsprop);
		setDatasets(datasetsprop);
	},[labelsprop,datasetsprop])

    return (<>
		<Bar className={classNames} options={options} data={{labels,datasets}}></Bar>
	</>);
};

export default BarChartComponent;
