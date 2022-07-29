import "./Chart.scss";
import { AreaChart, XAxis, YAxis, CartesianGrid, Tooltip, Area, ResponsiveContainer } from "recharts";


export default function Chart({height,title}) {
    const data = [
        {name:"January","Total-Earn":12320,"Orders":524},
        {name:"February","Total-Earn":10250,"Orders":421},
        {name:"March","Total-Earn":11240,"Orders":376},
        {name:"April","Total-Earn":15420,"Orders":652},
        {name:"May","Total-Earn":11242,"Orders":451}

    ]
    return (
        <div className="chart">
            <p>{title}</p>
            <ResponsiveContainer width="100%" height={height}>
                <AreaChart data={data}>
                    <defs>
                        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#8884d8" stopOpacity={0.2} />
                        </linearGradient>
                    </defs>
                    <XAxis dataKey="name" stroke="#636e72"/>
                    <YAxis unit={"$"} fontSize="0.8rem"/>
                    <CartesianGrid strokeDasharray="3 3" />
                    <Tooltip labelStyle={{color:"#7158e2",fontWeight:"700"}} contentStyle={{borderRadius:"5px", fontSize:"0.85rem"}}/>
                    <Area type="monotone" dataKey="Total-Earn" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
                </AreaChart>
            </ResponsiveContainer>
        </div>

    )
}
