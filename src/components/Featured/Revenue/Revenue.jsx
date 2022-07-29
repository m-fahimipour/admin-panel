import "./Revenue.scss";
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
export default function Revenue() {
    let target = 2000;
    let earn = 741;
    let increaseTraget = false;
    let increaseLastWeek = false;
    let increaselastMonth = true;
    return (
        <div className="containerRevenue">
            <div className="top">
                <p>Total Revenue</p>
                <MoreVertOutlinedIcon />
            </div>
            <div className="middle">
                <CircularProgressbar className="circularbar" value={earn} maxValue={target} text={`${(earn / target) * 100}%`} strokeWidth={6} />
                <p>Total sales made today</p>
                <p>{`$ ${earn}`}</p>
                <p>previous transaction processing. last payment may not be included</p>
            </div>
            <div className="bottom">
                <div className="target">
                    <p>Target</p>
                    <div className={increaseTraget ? "positive" : "negative"}>
                        {increaseTraget ? <KeyboardArrowUpOutlinedIcon/> : <KeyboardArrowDownOutlinedIcon/>}
                        $12.5k
                    </div>
                </div>
                <div className="lastweek">
                    <p>Last Week</p>
                    <div className={increaseLastWeek ? "positive" : "negative"}>
                        {increaseLastWeek ? <KeyboardArrowUpOutlinedIcon/> : <KeyboardArrowDownOutlinedIcon/>}
                        $12.5k
                    </div>
                </div>
                <div className="lastmonth">
                    <p>Last Month</p>
                    <div className={increaselastMonth ? "positive" : "negative"}>
                        {increaselastMonth ? <KeyboardArrowUpOutlinedIcon/> : <KeyboardArrowDownOutlinedIcon/>}
                        $12.5k
                    </div>
                </div>
                
            </div>
        </div>
    )
}