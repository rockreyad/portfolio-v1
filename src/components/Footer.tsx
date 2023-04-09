import React from "react";
import dayjs from "dayjs";

const Footer = () => {
  const currentYear = dayjs().format("YYYY");
  return (
    <div className="flex flex-col">
      {/* Last Credit and Mail */}
      <div className="bg-[#CFD2CF] dark:bg-graySoft px-auto">
        <p className="py-3 text-xs md:text-sm lg:text-base font-medium font-MarkPro text-[#635666] dark:text-[#7A86B6] flex justify-center">
          Built From Inspiration With ❤️ ©️ Copyright {currentYear}. All Rights
          Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
