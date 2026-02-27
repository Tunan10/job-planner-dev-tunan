// let interviewList = [];
// let rejectedList = [];

// let totalCount = document.getElementById('total-count');
// let interviewCount = document.getElementById('interview-count');
// let rejectCount = document.getElementById('rejected-count');
// let totalJobCount = document.getElementById('total-job-count');

// const mainContainer = document.querySelector('main');
// const allCardSection = document.getElementById('All-job-card');
// const filterSection = document.getElementById('filtered-section');

// function calculateCount() {
//   totalCount.innerText = allCardSection.children.length;
//   interviewCount.innerText = interviewList.length;
//   rejectCount.innerText = rejectedList.length;
//   totalJobCount.innerText = allCardSection.children.length + ' jobs';
// }

// calculateCount();

// const allFilterBtn = document.getElementById('all-filter-btn');
// const interviewFilterBtn = document.getElementById('interview-filter-btn');
// const rejectedFilterBtn = document.getElementById('rejected-filter-btn');

// mainContainer.addEventListener('click', function (event) {
//   const parentNode = event.target.closest('.card');
//   if (!parentNode) return;

//   const JobName = parentNode.querySelector('.JobName').innerText;
//   const jobInfo = parentNode.querySelector('.jobInfo').innerText;
//   const jobDetails = parentNode.querySelector('.jobDetails').innerText;
//   const jobBio = parentNode.querySelector('.jobBio').innerText;

//   if (event.target.classList.contains('interviewBtn')) {
//     interviewList.push({
//       JobName,
//       jobInfo,
//       jobDetails,
//       jobBio,
//       JobStatus: 'Interview',
//     });

//     parentNode.remove();

//     renderInterview();
//     calculateCount();
//   } else if (event.target.classList.contains('rejectedBtn')) {
//     rejectedList.push({
//       JobName,
//       jobInfo,
//       jobDetails,
//       jobBio,
//       JobStatus: 'Rejected',
//     });

//     parentNode.remove();

//     renderRejected();
//     calculateCount();
//   }
// });

// function toggleStyle(id) {
//   allFilterBtn.classList.remove('bg-blue-500', 'text-white');
//   interviewFilterBtn.classList.remove('bg-blue-500', 'text-white');
//   rejectedFilterBtn.classList.remove('bg-blue-500', 'text-white');

//   allFilterBtn.classList.add('bg-white', 'text-gray-500');
//   interviewFilterBtn.classList.add('bg-white', 'text-gray-500');
//   rejectedFilterBtn.classList.add('bg-white', 'text-gray-500');

//   const selected = document.getElementById(id);

//   selected.classList.remove('bg-white', 'text-gray-500');
//   selected.classList.add('bg-blue-500', 'text-white');

//   if (id === 'interview-filter-btn') {
//     allCardSection.classList.add('hidden');
//     filterSection.classList.remove('hidden');
//     renderInterview();
//   } else if (id === 'rejected-filter-btn') {
//     allCardSection.classList.add('hidden');
//     filterSection.classList.remove('hidden');
//     renderRejected();
//   } else {
//     allCardSection.classList.remove('hidden');
//     filterSection.classList.add('hidden');
//   }
// }

// function deleteInterview(index) {
//   interviewList.splice(index, 1);
//   renderInterview();
//   calculateCount();
// }

// function deleteRejected(index) {
//   rejectedList.splice(index, 1);
//   renderRejected();
//   calculateCount();
// }

// function renderInterview() {
//   filterSection.innerHTML = '';

//   if (interviewList.length === 0) {
//     filterSection.innerHTML = `
//      <div class="h-[400px]  ">
//       <div class="flex flex-col items-center justify-center pt-20"><img src="./jobs.png" alt="" class="w-32 ">
//         <h2>No jobs available</h2>
//         <p>Check back soon for new job opportunities</p>
//       </div>
//     </div>`;
//     return;
//   }

//   interviewList.forEach((item, index) => {
//     const div = document.createElement('div');
//     div.className = 'card mb-4 mt-8';

//     div.innerHTML = `
//       <div class="shadow-sm p-6">
//         <div class="grid grid-cols-2">
//           <p class="font-bold">${item.JobName}</p>
//           <button onclick="deleteInterview(${index})">
//             🗑
//           </button>
//         </div>

//         <p class="text-gray-400">${item.jobInfo}</p>
//         <p class="text-gray-400 mt-5">${item.jobDetails}</p>

//         <div class="mt-5">
//           <p class="bg-green-100 text-green-600 w-28 h-10 p-2 rounded font-semibold">
//             Interview
//           </p>
//           <p class="mt-2 text-gray-400">${item.jobBio}</p>
//         </div>
//       </div>
//     `;

//     filterSection.appendChild(div);
//   });
// }

// function renderRejected() {
//   filterSection.innerHTML = '';

//   if (rejectedList.length === 0) {
//     filterSection.innerHTML = `
//       <div class="h-[400px]  ">
//       <div class="flex flex-col items-center justify-center pt-20"><img src="./jobs.png" alt="" class="w-32 ">
//         <h2>No jobs available</h2>
//         <p>Check back soon for new job opportunities</p>
//       </div>
//     </div>`;
//     return;
//   }

//   rejectedList.forEach((item, index) => {
//     const div = document.createElement('div');
//     div.className = 'card mb-4 mt-8';

//     div.innerHTML = `
//       <div class="card mb-[16px]">
//         <div class="shadow-sm p-6">
//           <div class="grid grid-cols-2  place-content-between ">
//             <p class="JobName font-bold">${item.JobName}</p>
//             <button id="delet-btn" class="text-right "><i class="fa-regular fa-trash-can"></i></button>
//           </div>

//           <div>
//             <p class="jobInfo text-gray-400 ">Backend Developer</p>
//             <p class="jobDetails text-gray-400 mt-5">${item.jobInfo}</p>
//           </div>

//           <div class="mt-5">
//             <p class="JobStatus bg-red-400 text-white font-bold w-28 h-10  p-2 rounded-[4px] ">${item.JobStatus}</p>
//             <p class="jobBio mt-2 text-gray-400">${item.jobBio}
//             </p>
//           </div>
//           <div class="mt-5">

//             <button id="interview-btn" class="interviewBtn  btn btn-outline btn-success">Interview</button>
//             <button id="rejected-btn" class="rejectedBtn  btn btn-outline btn-error">Rejected</button>

//           </div>
//         </div>
//       </div>`;

//     filterSection.appendChild(div);
//   });
// }

//****************************** */

let interviewList = [];
let rejectedList = [];

let totalCount = document.getElementById('total-count');
let interviewCount = document.getElementById('interview-count');
let rejectCount = document.getElementById('rejected-count');
let totalJobCount = document.getElementById('total-job-count');

const mainContainer = document.querySelector('main');
const allCardSection = document.getElementById('All-job-card');
const filterSection = document.getElementById('filtered-section');

const allFilterBtn = document.getElementById('all-filter-btn');
const interviewFilterBtn = document.getElementById('interview-filter-btn');
const rejectedFilterBtn = document.getElementById('rejected-filter-btn');

function calculateCount() {
  totalCount.innerText = allCardSection.children.length;
  interviewCount.innerText = interviewList.length;
  rejectCount.innerText = rejectedList.length;
  totalJobCount.innerText = allCardSection.children.length + ' jobs';
}

calculateCount();

mainContainer.addEventListener('click', function (event) {
  const parentNode = event.target.closest('.card');
  if (!parentNode) return;

  const JobName = parentNode.querySelector('.JobName').innerText;
  const jobInfo = parentNode.querySelector('.jobInfo').innerText;
  const jobDetails = parentNode.querySelector('.jobDetails').innerText;
  const jobBio = parentNode.querySelector('.jobBio').innerText;

  const jobObject = {
    JobName,
    jobInfo,
    jobDetails,
    jobBio,
  };

  if (event.target.classList.contains('interviewBtn')) {
    rejectedList = rejectedList.filter(job => job.JobName !== JobName);

    if (!interviewList.find(job => job.JobName === JobName)) {
      interviewList.push(jobObject);
    }

    parentNode.remove();
    renderInterview();
    calculateCount();
  } else if (event.target.classList.contains('rejectedBtn')) {
    interviewList = interviewList.filter(job => job.JobName !== JobName);

    if (!rejectedList.find(job => job.JobName === JobName)) {
      rejectedList.push(jobObject);
    }

    parentNode.remove();
    renderRejected();
    calculateCount();
  } else if (event.target.closest('#delet-btn')) {
    parentNode.remove();
    calculateCount();
  }
});

function toggleStyle(id) {
  allFilterBtn.classList.remove('bg-blue-500', 'text-white');
  interviewFilterBtn.classList.remove('bg-blue-500', 'text-white');
  rejectedFilterBtn.classList.remove('bg-blue-500', 'text-white');

  allFilterBtn.classList.add('bg-white', 'text-gray-500');
  interviewFilterBtn.classList.add('bg-white', 'text-gray-500');
  rejectedFilterBtn.classList.add('bg-white', 'text-gray-500');

  const selected = document.getElementById(id);

  selected.classList.remove('bg-white', 'text-gray-500');
  selected.classList.add('bg-blue-500', 'text-white');

  if (id === 'interview-filter-btn') {
    allCardSection.classList.add('hidden');
    filterSection.classList.remove('hidden');
    renderInterview();
  } else if (id === 'rejected-filter-btn') {
    allCardSection.classList.add('hidden');
    filterSection.classList.remove('hidden');
    renderRejected();
  } else {
    allCardSection.classList.remove('hidden');
    filterSection.classList.add('hidden');
  }
}

function deleteInterview(index) {
  interviewList.splice(index, 1);
  renderInterview();
  calculateCount();
}

function deleteRejected(index) {
  rejectedList.splice(index, 1);
  renderRejected();
  calculateCount();
}

function renderInterview() {
  filterSection.innerHTML = '';

  if (interviewList.length === 0) {
    filterSection.innerHTML = emptyUI();
    return;
  }

  interviewList.forEach((item, index) => {
    const div = document.createElement('div');
    div.className = 'card mb-4 mt-8';

    div.innerHTML = `
      <div class="shadow-sm p-6">
        <div class="grid grid-cols-2">
          <p class="JobName font-bold">${item.JobName}</p>
          <button onclick="deleteInterview(${index})">
            <i class="fa-regular fa-trash-can"></i>
          </button>
        </div>

        <p class="jobInfo text-gray-400">${item.jobInfo}</p>
        <p class="jobDetails text-gray-400 mt-5">${item.jobDetails}</p>

        <div class="mt-5">
          <p class="bg-green-200 text-green-600 w-28 h-10 p-2 rounded font-semibold">
            Interview
          </p>
          <p class="jobBio mt-2 text-gray-400">${item.jobBio}</p>
        </div>

        <div class="mt-5">
          <button onclick="moveToRejected(${index})"
            class="btn btn-outline btn-error ">
            Rejected
          </button>
        </div>
      </div>
    `;

    filterSection.appendChild(div);
  });
}

function renderRejected() {
  filterSection.innerHTML = '';

  if (rejectedList.length === 0) {
    filterSection.innerHTML = emptyUI();
    return;
  }

  rejectedList.forEach((item, index) => {
    const div = document.createElement('div');
    div.className = 'card mb-4 mt-8';

    div.innerHTML = `
      <div class="shadow-sm p-6">
        <div class="grid grid-cols-2">
          <p class="JobName font-bold">${item.JobName}</p>
          <button onclick="deleteRejected(${index})">
            <i class="fa-regular fa-trash-can"></i>
          </button>
        </div>

        <p class="jobInfo text-gray-400">${item.jobInfo}</p>
        <p class="jobDetails text-gray-400 mt-5">${item.jobDetails}</p>

        <div class="mt-5">
          <p class="bg-red-100 text-red-600 w-28 h-10 p-2 rounded font-semibold">
            Rejected
          </p>
          <p class="jobBio mt-2 text-gray-400">${item.jobBio}</p>
        </div>

        <div class="mt-5">
          <button onclick="moveToInterview(${index})"
            class="btn btn-outline btn-success">
              Interview
          </button>
        </div>
      </div>
    `;

    filterSection.appendChild(div);
  });
}

function moveToRejected(index) {
  const job = interviewList[index];
  interviewList.splice(index, 1);
  rejectedList.push(job);
  renderInterview();
  calculateCount();
}

function moveToInterview(index) {
  const job = rejectedList[index];
  rejectedList.splice(index, 1);
  interviewList.push(job);
  renderRejected();
  calculateCount();
}

function emptyUI() {
  return `
    <div class="h-[400px]">
      <div class="flex flex-col items-center justify-center pt-20">
        <img src="./jobs.png" class="w-32">
        <h2>No jobs available</h2>
        <p>Check back soon for new job opportunities</p>
      </div>
    </div>
  `;
}
