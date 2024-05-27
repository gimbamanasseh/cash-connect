import DisplayTodaydate from "../../../components/formatDate";
function MainContent() {
  return (
    <>
      <div className="py-6 px-[2.5rem] mt-[6.38rem]">
        <section className="w-full bg-gray-50 sm:p-5">
          <div className="w-full mx-auto">
            <div className="flex justify-between my-4">
              <div>
                <span className="text-[1.5rem] font-bold block">Messaging</span>
                <span className="text-[1.125rem] font-light text-[#475367]">
                  Receive messages from your clients and agents.
                </span>
              </div>
              <div className="w-[14.5rem] flex justify-between p-4 bg-white rounded-lg border border-[#E4E7EC]">
                <div className="p-4 h-[50px] w-[50px] rounded-full bg-[#F0F2F5]">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H64C28.7 64 0 92.7 0 128v16 48V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H152V24zM48 192H400V448c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192z" />
                  </svg>
                </div>
                <div>
                  <p>Today’s Date</p>
                  <p className="font-semibold text-[#344054]">
                    <DisplayTodaydate />
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full h-auto p-3 relative flex justify-start overflow-hidden">
              <div className="w-[50%] p-3">
                {/* filter bar for the messages into all, unread, agents, and clients */}
                <div className="flex justify-between">
                  <button
                    type="button"
                    className="py-3 px-4 font-bold text-white bg-orange rounded-lg"
                  >
                    All Messages
                  </button>
                  <button
                    type="button"
                    className="py-3 px-4 font-bold text-black rounded-lg"
                  >
                    Unread
                  </button>
                  <button
                    type="button"
                    className="py-3 px-4 font-bold text-black rounded-lg"
                  >
                    Agents
                  </button>
                  <button
                    type="button"
                    className="py-3 px-4 font-bold text-black rounded-lg"
                  >
                    Clients
                  </button>
                </div>
                {/* message preview pill */}
                <div className="my-4">
                  <div className="rounded-lg bg-white h-[5rem] p-2 flex justify-start flex-row">
                    <div className="basis-1/4">user icon</div>
                    <div className="basis-3/4">message pill</div>
                  </div>
                </div>
              </div>
              <div className="w-[50%] p-3 bg-white rounded-lg h-96">second</div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
export default MainContent;
