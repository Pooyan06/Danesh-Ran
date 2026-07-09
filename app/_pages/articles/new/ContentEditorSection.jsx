"use client";

import dynamic from "next/dynamic";
import "react-quill-new/dist/quill.snow.css";

const ReactQuill = dynamic(() => import("react-quill-new"), {
  ssr: false,
});
import "react-quill-new/dist/quill.snow.css";
import { InfoIcon } from "@/app/_assets/Icons";

const modules = {
  toolbar: [
    [{ header: [1, 2, 3, 4, false] }],
    ["bold", "italic", "underline", "strike"],
    ["blockquote", "code-block"],
    [{ list: "ordered" }, { list: "bullet" }],
    [{ indent: "-1" }, { indent: "+1" }],
    [{ align: [] }],
    ["clean"],
  ],
};

const formats = [
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "code-block",
  "list",
  "indent",
  "align",
];

export default function ContentEditorSection() {
  return (
    <div>
      <p className="text-sm font-medium">
        متن مقاله <span className="text-red-600">*</span>
      </p>

      <div className="quill-wrapper my-2">
        <ReactQuill
          theme="snow"
          modules={modules}
          formats={formats}
          placeholder="متن کامل مقاله را اینجا بنویسید..."
          className="bg-brand-1 rounded-2xl"
        />
      </div>
      <p className="text-brand-4 flex items-center gap-1 text-[0.8rem]">
        <InfoIcon size={1.85} />
        از ابزارهای بالا برای قالب‌بندی متن استفاده کنید.
      </p>
    </div>
  );
}
