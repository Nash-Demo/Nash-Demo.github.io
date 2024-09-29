// Dynamic Field Creation

const requestList = document.querySelector("#requests-list");
const requestForm = requestList.querySelector(".request-form");
const addRequestButton = document.querySelector("#add-request");
let size = requestList.childElementCount;

addRequestButton.addEventListener("click", addRequest);

/**
 * removeRequest: the function remove a form for a new request
 */

function removeRequest(index) {
  let element = document.getElementById(index);
  element.remove();
}

/**
 * addRequest: the function add a form for a new request
 */
function addRequest() {
  size++;

  let element = requestForm.cloneNode(true);
  let index = size;

  //Get element of the sub form request
  let title = element.querySelector("div > .request-title");
  let removeRequestButton = element.querySelector("div > .remove-request");
  let service = element.querySelector(".request-infos > .request-service");
  let deadline = element.querySelector(".request-infos  > .request-deadline");
  let description = element.querySelector(".request-describe");

  // Custom element of sub form
  element.setAttribute("id", `request-${index}`);

  title.textContent = `Request ${index}`;

  removeRequestButton.innerHTML = `<div onclick="removeRequest('request-${index}')"
                                        class="remove-request p-1.5 h-max w-max bg-red-600 hover:bg-red-600/80 leading-none text-lg text-white rounded cursor-pointer transition ease-in-out duration-200">
                                        <i class="ri-close-fill"></i>
                                    </div>`;

  service.innerHTML = `<label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            for="request-${index}-service">
                            AI Service <i class="text-red-600">*</i>
                        </label>
                        <div class="relative">
                            <select class="block appearance-none  w-full bg-white border border-gray-300 text-gray-700 text-sm py-3 px-4 pr-8 mb-3 rounded leading-tight focus:outline-none focus:bg-white focus:border-blue-green"
                                id="request-1-service" name="request-1-service">
                                <option>Building of Websites</option>
                                <option>Assistance in Project Management/Business Plans</option>
                                <option>Content Generation for Blogs, Social Media and Emails</option>
                                <option>Assistance in Coding</option>
                                <option>Images editing</option>
                            </select>
                            <div class="pointer-events-none text-2xl absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <i class="ri-arrow-down-s-fill"></i>
                            </div>
                        </div>`;

  deadline.innerHTML = `<label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            for="request-${index}-deadline">
                            Estimate deadline
                        </label>
                        <input
                            class="appearance-none block w-full bg-white text-gray-700 border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-blue-green"
                            id="request-${index}-deadline" name="request-${index}-deadline" type="date" placeholder="">`;

  description.innerHTML = `<label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                for="request-${index}-description">
                                Description <i class="text-red-600">*</i>
                            </label>
                            <textarea id="request-${index}-description" name="request-${index}-description" rows="3"
                                placeholder="Add informations of your request here" required
                                class="block w-full rounded border border-gray-300 text-gray-700 placeholder:text-gray-400 leading-normal py-3 px-4 mb-4 focus:bg-white focus:border-blue-green"></textarea>`;

  requestList.appendChild(element);
}
