import React, { useRef, useState, useCallback } from "react";
import { Eye, Plus, UploadCloud, Trash2 } from "lucide-react";
import type { ChangeEvent } from "react";
import { PdfIcon } from "../../assets/pdfIcon";

/** Type */
type Doc = {
  id: string;
  title: string;
  fileName: string;
  file?: File | null;
  issueDate?: string; // yyyy-mm-dd
  expiryDate?: string; // yyyy-mm-dd
  createdAt: string;
};

/** Helpers */
const uid = () =>
  Math.random().toString(36).slice(2, 9) + Date.now().toString().slice(-4);

const formatDisplayDate = (iso?: string) => {
  if (!iso) return "-";
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const dd = String(d.getDate()).padStart(2, "0");
  const yyyy = d.getFullYear();
  return `${mm}/${dd}/${yyyy}`;
};

const isExpired = (expiry?: string) => {
  if (!expiry) return false;
  const today = new Date();
  const e = new Date(expiry);
  // treat same day as not expired
  return e.getTime() < new Date(today.getFullYear(), today.getMonth(), today.getDate()).getTime();
};



/** Component */
export default function DocumentUploader() {
  const [docs, setDocs] = useState<Doc[]>(() => {

    return [
      {
        id: uid(),
        title: "Onboarding Packet",
        fileName: "onboarding.pdf",
        issueDate: "2025-01-15",
        expiryDate: "2025-01-25",
        createdAt: new Date().toISOString(),
      },
      {
        id: uid(),
        title: "Study Certificate",
        fileName: "study-certificate.pdf",
        issueDate: "2025-01-15",
        expiryDate: undefined,
        createdAt: new Date().toISOString(),
      },
      {
        id: uid(),
        title: "Computer Certificate",
        fileName: "computer-certificate.pdf",
        issueDate: "2025-01-15",
        expiryDate: "2026-01-25",
        createdAt: new Date().toISOString(),
      },
    ];
  });

  const [showAdd, setShowAdd] = useState(false);
  const [adding, setAdding] = useState<{ title: string; issueDate?: string; expiryDate?: string; file?: File | null }>({
    title: "",
    issueDate: undefined,
    expiryDate: undefined,
    file: null,
  });

  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const dropRef = useRef<HTMLDivElement | null>(null);

  const onFileSelect = (e: ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files && e.target.files[0];
    if (f) {
      setAdding((s) => ({ ...s, file: f, title: s.title || f.name }));
    }
  };

  const onAddSubmit = () => {
    if (!adding.file && !adding.title) return; // minimum
    const newDoc: Doc = {
      id: uid(),
      title: adding.title || (adding.file ? adding.file.name : "Document"),
      fileName: adding.file ? adding.file.name : (adding.title || "unknown.pdf"),
      file: adding.file ?? null,
      issueDate: adding.issueDate,
      expiryDate: adding.expiryDate,
      createdAt: new Date().toISOString(),
    };
    setDocs((p) => [newDoc, ...p]);
    setAdding({ title: "", issueDate: undefined, expiryDate: undefined, file: null });
    setShowAdd(false);
  };

  const onRemove = (id: string) => {
    setDocs((p) => p.filter((d) => d.id !== id));
  };

  const onDrop = useCallback((ev: React.DragEvent<HTMLDivElement>) => {
    ev.preventDefault();
    const f = ev.dataTransfer.files && ev.dataTransfer.files[0];
    if (f) {
      const newDoc: Doc = {
        id: uid(),
        title: f.name,
        fileName: f.name,
        file: f,
        createdAt: new Date().toISOString(),
      };
      setDocs((p) => [newDoc, ...p]);
    }
  }, []);

  const onDragOver = (ev: React.DragEvent<HTMLDivElement>) => {
    ev.preventDefault();
  };

  return (
    <div className="w-full max-w-[280px] sm:max-w-[300px] lg:max-w-[320px]">



      {/* Panel list */}
      <div className="bg-white border-l border-gray-200 h-[520px] overflow-y-auto">
        {/* Each document row */}
        <div className="divide-y divide-gray-200">
          {docs.map((d) => {
            const expired = isExpired(d.expiryDate);
            return (
              <div key={d.id} className="px-4 py-4 flex items-start gap-4">
                {/* icon */}
                <div className="w-12 flex-none flex items-start justify-center pt-1">
                  <div className="w-8 h-8">
                    <PdfIcon />
                  </div>
                </div>

                {/* content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <div className={`font-semibold ${expired ? "text-red-600" : "text-green-600"} text-base`}>
                      {d.title}
                    </div>
                    <div className="text-gray-400">
                      <button
                        title="View"
                        className="p-2 rounded-full hover:bg-gray-100"
                        onClick={() => {
                          // try to open file if it's a blob/File
                          if (d.file) {
                            const url = URL.createObjectURL(d.file);
                            window.open(url, "_blank");
                            // release after 30secs 
                            setTimeout(() => URL.revokeObjectURL(url), 30000);
                          } else {
                            alert(`Would open: ${d.fileName}`);
                          }
                        }}
                      >
                        <Eye size={18} />
                      </button>
                    </div>
                  </div>

                  <div className="mt-2 text-sm text-gray-700">{d.fileName}</div>

                  <div className="flex items-center justify-between mt-3 text-xs text-gray-500">
                    <div>
                      <div className="uppercase text-[10px] text-gray-400 tracking-wider">Setup</div>
                      <div className="text-sm text-gray-700">{formatDisplayDate(d.issueDate)}</div>
                    </div>

                    <div className="text-right">
                      {expired ? (
                        <div className="text-[12px] text-red-500 font-semibold">Expired {formatDisplayDate(d.expiryDate)}</div>
                      ) : (
                        <>
                          <div className="uppercase text-[10px] text-gray-400 tracking-wider">Expiry</div>
                          <div className="text-sm text-gray-700">{formatDisplayDate(d.expiryDate)}</div>
                        </>
                      )}
                    </div>
                  </div>
                </div>

                {/* remove */}
                <div className="flex-none ml-3">
                  <button
                    onClick={() => onRemove(d.id)}
                    className="p-2 rounded hover:bg-gray-50 text-gray-400"
                    title="Remove"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Drag & drop + Add More area */}
        <div
          ref={dropRef}
          onDrop={onDrop}
          onDragOver={onDragOver}
          className="px-4 py-6 bg-gray-50 border-t border-gray-100"
        >
          {!showAdd ? (
            <div className="flex items-center justify-between">
              <button
                onClick={() => {
                  setShowAdd(true);
                  setTimeout(() => fileInputRef.current?.focus(), 120);
                }}
                className="flex items-center gap-2 text-orange-500 font-semibold"
              >
                <Plus size={18} /> Add More
              </button>

              <label className="flex items-center gap-2 text-sm text-gray-500 cursor-pointer">
                <UploadCloud size={16} />
                <input
                  ref={fileInputRef}
                  type="file"
                  className="hidden"
                  onChange={onFileSelect}
                />
                Upload
              </label>
            </div>
          ) : (
            <div className="space-y-3">
              <div className="text-xs text-gray-500">DOCUMENT TITLE</div>
              <input
                className="w-full px-3 py-2 rounded border border-gray-200 text-sm"
                placeholder="Document title"
                value={adding.title}
                onChange={(e) => setAdding((s) => ({ ...s, title: e.target.value }))}
              />

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <div className="text-xs text-gray-500">ISSUE DATE</div>
                  <input
                    type="date"
                    className="w-full px-3 py-2 rounded border border-gray-200 text-sm"
                    value={adding.issueDate ?? ""}
                    onChange={(e) => setAdding((s) => ({ ...s, issueDate: e.target.value }))}
                  />
                </div>
                <div>
                  <div className="text-xs text-gray-500">EXPIRY DATE</div>
                  <input
                    type="date"
                    className="w-full px-3 py-2 rounded border border-gray-200 text-sm"
                    value={adding.expiryDate ?? ""}
                    onChange={(e) => setAdding((s) => ({ ...s, expiryDate: e.target.value }))}
                  />
                </div>
              </div>

              <div className="flex items-center gap-3">
                <label className="flex-1 flex items-center gap-3 border border-dashed border-gray-200 rounded px-3 py-2 text-sm cursor-pointer">
                  <UploadCloud size={18} />
                  <span>{adding.file ? adding.file.name : "Choose a file"}</span>
                  <input
                    type="file"
                    className="hidden"
                    onChange={(e) => {
                      const f = e.target.files && e.target.files[0];
                      if (f) setAdding((s) => ({ ...s, file: f, title: s.title || f.name }));
                    }}
                  />
                </label>

                <button
                  onClick={onAddSubmit}
                  className="px-4 py-2 bg-orange-500 text-white rounded text-sm"
                >
                  Save
                </button>

                <button
                  onClick={() => {
                    setShowAdd(false);
                    setAdding({ title: "", issueDate: undefined, expiryDate: undefined, file: null });
                  }}
                  className="px-3 py-2 border rounded text-sm"
                >
                  Cancel
                </button>
              </div>

              <div className="text-xs text-gray-400">Or drag & drop a file into this area</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
