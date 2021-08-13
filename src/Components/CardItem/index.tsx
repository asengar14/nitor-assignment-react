/*
 * Implementation of CardItem Component
 */
import { Card } from "antd";
import { SmileTwoTone } from "@ant-design/icons";
import { ICardItem } from "../../Interfaces/cardItem";
import "./card-item.css";

const CardItem = (props: ICardItem) => {
  const { Meta } = Card;
  const { joke, isLoading } = props;
  return (
    <div className="card-spacing">
      <Card loading={isLoading}>
        <Meta avatar={<SmileTwoTone />} title={joke} />
      </Card>
    </div>
  );
};

export default CardItem;
