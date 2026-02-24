// take blank array to store value
let interviewList = [];
let rejecteList = [];

// Header count change
let totalCount = document.getElementById('total-count');
let interviewCount = document.getElementById('interview-count');
let rejectCount = document.getElementById('rejected-count');

const mainContainer = document.querySelector('main');
const allCardSection = document.getElementById('All-job-card');
const filterSection = document.getElementById('filtered-section');

function calculateCount() {
  totalCount.innerText = allCardSection.children.length;
  interviewCount.innerText = interviewList.length;
  rejectCount.innerText = rejecteList.length;
}
calculateCount();

// for Button behaviour
const allFilterBtn = document.getElementById('all-filter-btn');
const interviewFilterBtn = document.getElementById('interview-filter-btn');
const rejectedFilterBtn = document.getElementById('rejected-filter-btn');

function toggleStyle(id) {
  allFilterBtn.classList.remove('bg-blue-500', 'text-white');
  interviewFilterBtn.classList.remove('bg-blue', 'text-white');
  rejectedFilterBtn.classList.remove('bg-black', 'text-white');

  allFilterBtn.classList.add(
    'bg-white',
    'text-gray-500',
    'shadow-slate-200',
    'border',
    'border-gray-300',
  );
  interviewFilterBtn.classList.add('bg-white', 'text-gray-500');
  rejectedFilterBtn.classList.add('bg-white', 'text-gray-500');

  const selected = document.getElementById(id);
  console.log(selected);
  selected.classList.remove('bg-white', 'text-gray-500');
  selected.classList.add('bg-blue-500', 'text-white');
  if (id == 'interview-filter-btn') {
    allCardSection.classList.add('hidden');
    filterSection.classList.remove('hidden');
  } else if (id == 'all-filter-btn') {
    allCardSection.classList.remove('hidden');
    filterSection.className.add('hidden');
  }
}
mainContainer.addEventListener('click', function (event) {
  if (event.target.classList.contains('interviewBtn')) {
    const parenNode = event.target.parentNode.parentNode;
    const JobName = parenNode.querySelector('.JobName').innerText;
    const jobInfo = parenNode.querySelector('.jobInfo').innerText;
    const jobDetails = parenNode.querySelector('.jobDetails').innerText;
    const jobStatus = parenNode.querySelector('.JobStatus').innerText;
    const jobBio = parenNode.querySelector('.jobBio').innerText;
    parenNode.querySelector('.JobStatus').innerText = 'Applied';

    const cardInfo = {
      JobName,
      jobInfo,
      jobDetails,
      jobStatus,
      jobBio,
    };
    const JobNameExist = interviewList.find(
      item => item.JobName == cardInfo.JobName,
    );
    parenNode.querySelector('.JobStatus').innerText = 'Applied';

    if (!JobNameExist) {
      interviewList.push(cardInfo);
    }
    calculateCount();
    renderInterview();
  }
});

function renderInterview() {
  filterSection.innerHTML = '';
  for (let interView of interviewList) {
    console.log(interView);
    let div = document.createElement('div');
    div.className = 'card mb-[16px] mt-8';
    div.innerHTML = `<div class="shadow-sm p-6">
          <div class="grid grid-cols-2  place-content-between ">
            <p class="JobName font-bold"> ${interView.JobName}</p>
            <button id="delet-btn" class="text-right ">delet</button>
          </div>

          <div>
            <p class="jobInfo text-gray-400 ">React Native Developer</p>
            <p class="jobDetails text-gray-400 mt-5">Remote •
              Full-time • $130,000 - $175,000</p>
          </div>

          <div class="mt-5">
            <p class="JobStatus bg-blue-100 w-28 h-10  p-2 rounded-[4px] font-semibold">Not Applied</p>
            <p class="jobBio mt-2 text-gray-400">Build cross-platform mobile applications using React Native. W ork on
              products
              used by
              millions of users
              worldwide.</p>
          </div>
          <div class="mt-5">

            <button id="interview-btn" class="btn btn-outline btn-success">Interview</button>
            <button id="rejected-btn" class="btn btn-outline btn-error">Rejected</button>

          </div>
        </div>`;
    filterSection.appendChild(div);
  }
}

function renderRejected() {
  filterSection.innerHTML = '';
  for (let rejecTed of rejecteList) {
    console.log(rejecTed);
    let div = document.createElement('div');
    div.className = 'card mb-[16px] mt-8';
    div.innerHTML = `<div class="shadow-sm p-6">
          <div class="grid grid-cols-2  place-content-between ">
            <p class="JobName font-bold"> ${rejecTed.JobName}</p>
            <button id="delet-btn" class="text-right ">delet</button>
          </div>

          <div>
            <p class="jobInfo text-gray-400 ">React Native Developer</p>
            <p class="jobDetails text-gray-400 mt-5">Remote •
              Full-time • $130,000 - $175,000</p>
          </div>

          <div class="mt-5">
            <p class="JobStatus bg-blue-100 w-28 h-10  p-2 rounded-[4px] font-semibold">Not Applied</p>
            <p class="jobBio mt-2 text-gray-400">Build cross-platform mobile applications using React Native. W ork on
              products
              used by
              millions of users
              worldwide.</p>
          </div>
          <div class="mt-5">

            <button id="interview-btn" class="btn btn-outline btn-success">Interview</button>
            <button id="rejected-btn" class="btn btn-outline btn-error">Rejected</button>

          </div>
        </div>`;
    filterSection.appendChild(div);
  }
}
