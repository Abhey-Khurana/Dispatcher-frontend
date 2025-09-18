type Log = {
  heading: string;
  subHeading?: string;
  reason?: string;
  author: string;
  timestamp: string;
};

type Note = {
  location: string;
  note: string;
  driver: string;
  tripNumber: string;
  author: string;
  timestamp: string;
};

const logs: Log[] = [
  {
    heading: "Load Manifest: was generated.",
    author: "You • Partner Admin",
    timestamp: "Tue. Apr 2, 2024 @ 04:34 GMT+5",
  },
  {
    heading:
      "LastCheckCall changed from 3/30/2024 6:43:28 PM +00:00 to 4/1/2024 7:16:54 PM +00:00 for trip 1000024",
    reason: "Last Check Call Date Changed",
    author: "Amrit Dispatcher",
    timestamp: "Tue. Apr 2, 2024 @ 00:46 GMT+5",
  },
  {
    heading: "Status changed from In Transit to Delivered for load 1000024",
    reason: "Last Check Call Date Changed",
    author: "Amrit Dispatcher",
    timestamp: "Tue. Apr 2, 2024 @ 00:46 GMT+5",
  },
  {
    heading: "Status changed from In Transit to Delivered for load 1000024",
    reason: "Last Check Call Date Changed",
    author: "Amrit Dispatcher",
    timestamp: "Tue. Apr 2, 2024 @ 00:46 GMT+5",
  },
];

const notes: Note[] = [
  {
    location: "1905 Mchenry Ave, Escalon, CA",
    note: "Driver has dropped off commodity",
    driver: "SIDDHARTH SHARMA",
    tripNumber: "1000024",
    author: "Amrit Dispatcher",
    timestamp: "Tue. Apr 2, 2024 @ 00:46 GMT+5",
  },
  {
    location: "4601 Pylon Street, Fort Worth, TX",
    note: "Driver has picked up",
    driver: "SIDDHARTH SHARMA",
    tripNumber: "1000024",
    author: "Amrit Dispatcher",
    timestamp: "Sun. Mar 31, 2024 @ 00:13 GMT+5",
  },
];

export default function LogsNotes() {
  return (

    <div className="rounded-figma-sm overflow-hidden border border-gray-200 border-r-0 border-l-0">
      {/* Header Row */}
      <div className="grid grid-cols-2 divide-x divide-gray-200" style={{ background: '#007070' }}>
        <div className="text-white font-medium px-3 py-2">Logs</div>
        <div className="text-white font-medium px-3 py-2">Notes</div>
      </div>

      <div className="grid grid-cols-2 divide-x divide-gray-300 ">

        {/* Logs  */}
        <div className="px-3 py-2">
          {logs.map((log, idx) => (
            <div key={idx} className="mb-6 mt-2">
              <p className="font-semibold mb-1 text-[15px]">{log.heading}</p>
              {log.reason && <p className="text-gray-600"><b>Reason:</b> {log.reason}</p>}
              <p className="text-sm text-gray-500">
                by {log.author} • {log.timestamp}
              </p>
            </div>
          ))}

        </div>


        {/* Notes  */}
        <div className="px-3 py-2">
          {notes.map((note, idx) => (
            <div key={idx} className="mb-5">
              <p className="font-medium"><b>On Location</b></p>
              <p className="text-gray-700 font-semibold mb-2">{note.location}</p>
              <p className="mb-2"><b>Note: </b><span className="font-medium">{note.note}</span></p>
              <p className="mb-2"><b>Driver: </b><span className="font-medium">{note.driver}</span></p>
              <p className="mb-2"><b>Trip Number: </b><span className="font-medium">{note.tripNumber}</span></p>

              <p className="text-xs text-gray-500">
                by {note.author} / {note.timestamp}
              </p>
            </div>
          ))}
        </div>
      </div>


    </div>
  );
}
