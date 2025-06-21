import React from 'react'
import {Link,NavLink} from 'react-router'

export default function Footer() {
    return (
        <footer className="bg-white dark:bg-gray-800 text-black  dark:text-white ">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <hr className="my-3 border-black dark:border-white sm:mx-auto lg:my-3" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-black dark:text-white sm:text-center">
                        © 2025 &nbsp;
                        <a href="https://kaushalyadav.com.np/" className="hover:underline">
                            Kaushal Yadav
                        </a>
                        . All Rights Reserved.
                    </span>
                    <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
                        <a href="https://www.linkedin.com/in/imkaushall/" target='_blank' className=" text-black  dark:text-white   hover:text-orange-400">
                            <svg
                                className="w-4 h-4"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                            <path
                              d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 
                                 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 
                                 19h-3v-10h3v10zm-1.5-11.28c-.97 0-1.75-.79-1.75-1.75 
                                 0-.96.78-1.75 1.75-1.75s1.75.79 
                                 1.75 1.75c0 .96-.78 1.75-1.75 
                                 1.75zm13.5 11.28h-3v-5.5c0-1.1-.9-2-2-2s-2 .9-2 
                                 2v5.5h-3v-10h3v1.29c.58-.87 
                                 1.52-1.54 2.6-1.79 1.84-.41 
                                 3.4.97 3.4 2.76v7.74z"
                            />
                            </svg>
                            <span className="sr-only">LinkedIn page</span>
                        </a>
                        <a href="https://github.com/penguin-404/" target='_blank' className="text-black dark:text-white hover:text-orange-400">
                            <svg
                                className="w-4 h-4"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <span className="sr-only">GitHub account</span>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}