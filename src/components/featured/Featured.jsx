import './featured.css';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const Featured = () => {
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Total revenue</h1>
          <MoreVertIcon/>
      </div>
      <div className="bottom">
          <div className="featuredChart">
          <CircularProgressbar value={70} text={"70%"} strokeWidth={5}/>
          </div>
          <p className="title">Total sales made today </p>
          <p className="amount">$420</p>
          <p className="desc">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam, cupiditate. </p>
          <div className="summary">
            <div className="item">
              <div className="itemTitle">
                Target
              </div>
              <div className="itemResult negative">
                <KeyboardArrowUpIcon fontSize='small'/>
                <div className="resultAmount">$12.4K
                  </div>
              </div> 
            </div>
            <div className="item">
              <div className="itemTitle">
                Last Week
              </div>
              <div className="itemResult positive">
                <KeyboardArrowDownIcon fontSize='small'/>
                <div className="resultAmount">$12.4K
                  </div>
              </div> 
            </div>
            <div className="item">
              <div className="itemTitle">
                Last month
              </div>
              <div className="itemResult positive">
                <KeyboardArrowDownIcon fontSize='small'/>
                <div className="resultAmount">$12.4K
                  </div>
              </div> 
            </div>

          </div>
      </div>
    </div>
  )
}

export default Featured