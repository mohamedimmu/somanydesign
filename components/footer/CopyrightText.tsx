import React from "react";

const CopyrightText = () => {
  return (
    <div className="border-t-2 border-stroke pb-10 pt-8">
      <p className="text-textGrey text-center font-medium text-xl mb-4">
        &copy; 2024 SoManyDesign&reg; All rights reserved
      </p>
      <p className="text-center font-medium text-xl text-textGrey">
        Developed by &nbsp;
        <a href="www.mohamedimran.in" className="underline underline-offset-8 whitespace-nowrap">
          Mohamed Imran
        </a>
      </p>
    </div>
  );
};

export default CopyrightText;
