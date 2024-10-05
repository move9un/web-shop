/* eslint-disable */
import { useParams } from "react-router-dom";


function Detail(props) {

  let { id } = useParams();
  console.log(id);
  let numbers = props.shoes.find(function (x) {
    return x.id == id;
  })
  console.log(numbers)

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img src={"https://codingapple1.github.io/shop/shoes" + (numbers.id + 1) + ".jpg"} width="100%" />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{numbers.title}</h4>
          <p>{numbers.content}</p>
          <p>{numbers.price} 원</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
    </div>
  )
}

export default Detail;