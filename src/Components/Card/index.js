import { Card } from "antd";

const { Meta } = Card;

const Project = (props) => {
  return (
    <a href={props.url}>
      <Card
        hoverable
        style={{ width: 240 }}
        cover={<img alt="example" src={props.img} />}
      >
        <Meta title={props.title} description={props.description} />
      </Card>
    </a>
  );
};

export default Project;
