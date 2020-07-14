import React from "react";
import Markdown from "react-markdown";
import Block from "./index";
import lbStyle from "./LanguageBlock.scss";
type LanguageBlockProps = {
  langList: any[]
};
const LanguageBlock: React.FC<LanguageBlockProps> = ({ langList }) => (
  <Block>
    <ul className={lbStyle.ul}>
      {langList.map(item => (
        <li key={item.name}>
          <span className={lbStyle.langname}>{item.name}</span>
          <span className={lbStyle.langdesc}>
            <Markdown source={item.desc} />
          </span>
        </li>
      ))}
    </ul>
  </Block>
);
export default LanguageBlock;
