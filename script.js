// প্রয়োজনীয় element নেওয়া
var jobsContainer = document.getElementById("jobsContainer");

var totalCountEl = document.getElementById("totalCount");
var availableCountEl = document.getElementById("availableCount");

var allBtn = document.getElementById("allBtn");
var interviewBtn = document.getElementById("interviewBtn");
var rejectedBtn = document.getElementById("rejectedBtn");

var interviewEmpty = document.getElementById("interviewEmpty");
var rejectedEmpty = document.getElementById("rejectedEmpty");


// কাউন্ট আপডেট ফাংশন
function updateCounts() {
  var jobs = document.getElementsByClassName("job-card");

  var interviewCount = 0;
  var rejectedCount = 0;

  for (var i = 0; i < jobs.length; i++) {
    if (jobs[i].getAttribute("data-status") === "interview") {
      interviewCount++;
    }
    if (jobs[i].getAttribute("data-status") === "rejected") {
      rejectedCount++;
    }
  }

  totalCountEl.innerText = jobs.length;
  availableCountEl.innerText = jobs.length + " jobs";

  document.querySelector(".text-green-600").innerText = interviewCount;
  document.querySelector(".text-red-600").innerText = rejectedCount;
}


// ফিল্টার ফাংশন
function filterJobs(status) {
  var jobs = document.getElementsByClassName("job-card");
  var visible = 0;

  for (var i = 0; i < jobs.length; i++) {
    if (status === "all" || jobs[i].getAttribute("data-status") === status) {
      jobs[i].style.display = "block";
      visible++;
    } else {
      jobs[i].style.display = "none";
    }
  }

  interviewEmpty.style.display = "none";
  rejectedEmpty.style.display = "none";

  if (status === "interview" && visible === 0) {
    interviewEmpty.style.display = "block";
  }

  if (status === "rejected" && visible === 0) {
    rejectedEmpty.style.display = "block";
  }
}


// প্রতিটি job card সেটআপ
var cards = jobsContainer.getElementsByClassName("bg-white");

for (var i = 0; i < cards.length; i++) {
  var card = cards[i];
  card.classList.add("job-card");
  card.setAttribute("data-status", "all");

  var interviewBtnCard = card.querySelector(".border-green-500");
  var rejectedBtnCard = card.querySelector(".border-red-500");
  var badge = card.querySelector("span");
  var deleteBtn = card.querySelector(".deleteBtn");

  interviewBtnCard.onclick = function () {
    var parent = this.parentElement.parentElement;
    var badge = parent.querySelector("span");

    parent.setAttribute("data-status", "interview");
    badge.innerText = "INTERVIEW";
    badge.className = "inline-block mt-3 text-xs px-3 py-1 bg-green-100 text-green-600 rounded-md";
    updateCounts();
  };

  rejectedBtnCard.onclick = function () {
    var parent = this.parentElement.parentElement;
    var badge = parent.querySelector("span");

    parent.setAttribute("data-status", "rejected");
    badge.innerText = "REJECTED";
    badge.className = "inline-block mt-3 text-xs px-3 py-1 bg-red-100 text-red-600 rounded-md";
    updateCounts();
  };

  deleteBtn.onclick = function () {
  var card = this.parentElement;

  while (!card.classList.contains("job-card")) {
    card = card.parentElement;
  }

  card.remove();
  updateCounts();
};
}


// ফিল্টার বাটন ইভেন্ট
allBtn.onclick = function () {
  filterJobs("all");
};

interviewBtn.onclick = function () {
  filterJobs("interview");
};

rejectedBtn.onclick = function () {
  filterJobs("rejected");
};


// প্রথমবার কাউন্ট দেখানো
updateCounts();