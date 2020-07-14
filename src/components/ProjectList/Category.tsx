import React from "react";
import Item from "./Item";
import projectListStyle from "./index.scss";
type CategoryProps = {
  name: string,
  items: any[]
};
const Category: React.FC<CategoryProps> = ({ name, items }) => (
  <div className={projectListStyle.cat}>
    <h3 className={projectListStyle.cattitle}>{name}</h3>
    <div className={projectListStyle.items}>
      {items.map(item => (
        <Item
          key={item.name}
          name={item.name}
          url={item.url}
          urlTitle={item.url_title}
          gitUrl={item.git_url}
          githubUrl={item.github_url}
          npmUrl={item.npm_url}
          date={item.date}
          stack={item.stack}
          desc={item.desc}
        />
      ))}
    </div>
  </div>
);
export default Category;
