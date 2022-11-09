import React, { memo } from "react";

const HeaderMemo = () => {
  console.log("Render => HeaderMemo Components");
  return <div className="bg-danger text-center">HeaderMemo Componenti</div>;
};

export default memo(HeaderMemo);
