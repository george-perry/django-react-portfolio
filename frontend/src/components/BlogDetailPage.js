import React, { Component, useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import { NavBar } from "./NavBar"
import '../assets/tailwind.css'
import { SocialIcon } from 'react-social-icons';
import ReactMarkdown from 'react-markdown';

export const BlogDetailPage = () => {

  const [post, setPost] = useState(null);
  const { pk } = useParams();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`/api/posts/${pk}`);
        const post = await response.json();
        setPost(post);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPost();
  }, [pk]);

  if (!post) {
    return <div className="bg-[#0C2340] mx-auto">Loading...</div>;
  }

  let skills = post.project.skills.replace(' ', '').split('|');
  return (
    <div className="bg-[#0C2340]">
      <NavBar></NavBar>
      <article className="px-4 py-28 mx-auto max-w-7xl" itemID="#" itemScope itemType="http://schema.org/BlogPosting">
        <div className="w-full mx-auto mb-2 text-left md:w-3/4 lg:w-1/2">
          <img src={post.project.link} className="object-cover w-full h-full bg-center rounded-lg" alt="Kutty" />
          <h1 className="py-4 mb-3 text-3xl font-bold leading-tight md:text-4xl" itemProp="headline" title={post.title}>
            {post.title}
          </h1>
          {post.project.skills && (
            <div className="flex mb-6 space-x-2">
              {skills.map((skill, index) => (
                <a key={index} className="text-black bg-gray-100 badge hover:bg-gray-200" href="#">
                  {skill}
                </a>
              ))}
            </div>
          )}
          {post.github.length > 0 && (
            <div className="flex mb-6 space-x-2">
              <SocialIcon url={post.github} bgColor="#ffff" className="" />
              {post.active && (
                <SocialIcon url={post.active} bgColor="#ffff" className="" />
              )}
            </div>
          )}
          {post.date && (
            <a className="flex items-center text-gray-700" href="#">
              <div className="ml-2">
                <p className="text-sm text-gray-500 no-underline">{post.date}</p>
              </div>
            </a>
          )}
        </div>
        <div className="w-full mx-auto md:w-3/4 lg:w-1/2">
          <ReactMarkdown 
            className="prose"
            components={{
              ul: ({ children }) => <ul className="list-disc list-inside">{children}</ul>,
              ol: ({ children }) => <ol className="list-decimal list-inside">{children}</ol>,
            }}
          >
            {post.content}
          </ReactMarkdown>
        </div>
      </article>
    </div>
  )
}
