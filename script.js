// take blank array to store value
let interviewList = [];
let rejecteList = [];

// Header count change
let totalCount = document.getElementById('total-count');
let interviewCount = document.getElementById('interview-count');
let rejectCount = document.getElementById('rejected-count');

const mainContainer = document.querySelector('main');

// count Card section child
const allCardSection = document.getElementById('All-job-card');
function calculateCount() {
  totalCount.innerText = allCardSection.children.length;
  interviewCount.innerText = interviewList.length;
  rejectCount.innerText = interviewList.length;
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
}
mainContainer.addEventListener('click', function (event) {
  const parenNode = event.target.parentNode.parentNode;
  const JobName = parenNode.querySelector('.JobName').innerText;
  const jobInfo = parenNode.querySelector('.jobInfo').innerText;
  console.log(JobName, jobInfo);
});
