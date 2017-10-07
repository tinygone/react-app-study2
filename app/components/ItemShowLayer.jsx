import React from 'react';
import marked from 'marked';

function ItemShowLayer({item}) {
  // 如果没有传入item，直接返回一些静态提示
  if (!item || !item.id) {
    return (
      <div className="col-md-8 item-show-layer-component">
        <div className="no-select">请选择左侧列表里面的文章</div>
      </div>
    );
  }
  // 将Markdown转换成Html
  console.log("将Markdown转换成Html" + item.content);
  let content = marked(item.content);
  return (
    <div className="col-md-8 item-show-layer-component">
      <div className="control-area">
        <button className="btn btn-primary">编辑</button>
        <button className="btn btn-danger">删除</button>
      </div>
      <h2>{item.title}</h2>
      <div dangerouslySetInnerHTML={{__html: content}}/>
    </div>
  )
}

export default ItemShowLayer;