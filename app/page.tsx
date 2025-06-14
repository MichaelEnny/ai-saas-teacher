import { Button } from '@/components/ui/button'
import React from 'react'
import CompanionCard from "@/components/CompanionCard";
import CompanionList from "@/components/CompanionList";
import CTA from "@/components/CTA";
import {recentSessions} from "@/constants";
import {getAllCompanions, getRecentSessions} from "@/lib/actions/companion.actions";
import {getSubjectColor} from "@/lib/utils";
import Image from 'next/image'
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion'

const Page = async() => {
    const companions = await getAllCompanions({limit: 3});
    const recentSessionsCompanions = await getRecentSessions(10);

  return (
    <main>
      {/* 1️⃣ Hero Section */}
      <section className="w-full flex flex-col items-center justify-center py-16 bg-gradient-to-b from-yellow-50 to-white mb-8">
        <Image src="/images/logo.svg" alt="EduVoxa Logo" width={80} height={80} className="mb-4" />
        <h1 className="text-5xl font-bold mb-4 text-center">Welcome to EduVoxa</h1>
        <p className="text-xl text-gray-600 mb-6 text-center max-w-2xl">AI-powered learning companions for every subject. Personalized, interactive, and fun learning journeys for students of all ages.</p>
        <Button className="text-lg px-8 py-4">Get Started</Button>
      </section>

      {/* 2️⃣ Features / Benefits Grid */}
      <section className="py-16 bg-white">
        <h2 className="text-3xl font-bold text-center mb-10">Why EduVoxa?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="p-6 rounded-lg shadow bg-yellow-50 flex flex-col items-center">
            <span className="text-4xl mb-2">🤖</span>
            <h3 className="font-semibold text-lg mb-2">AI-Powered Tutors</h3>
            <p className="text-gray-600 text-center">Get instant help and explanations from AI companions tailored to your learning style.</p>
          </div>
          <div className="p-6 rounded-lg shadow bg-purple-50 flex flex-col items-center">
            <span className="text-4xl mb-2">🎯</span>
            <h3 className="font-semibold text-lg mb-2">Personalized Learning</h3>
            <p className="text-gray-600 text-center">Lessons adapt to your pace, interests, and goals for maximum engagement.</p>
          </div>
          <div className="p-6 rounded-lg shadow bg-pink-50 flex flex-col items-center">
            <span className="text-4xl mb-2">🌍</span>
            <h3 className="font-semibold text-lg mb-2">Anytime, Anywhere</h3>
            <p className="text-gray-600 text-center">Access your learning companions 24/7 from any device, anywhere in the world.</p>
          </div>
        </div>
      </section>

      {/* 3️⃣ Social Proof (Logos & Testimonials) */}
      <section className="py-16 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-10">Trusted by Learners Worldwide</h2>
        <div className="flex flex-wrap justify-center gap-8 mb-10">

          {/* Add more logos as needed */}
        </div>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <p className="italic mb-2">“EduVoxa made learning fun and interactive for my kids. The AI companions are amazing!”</p>
            <span className="font-semibold">— Parent, USA</span>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <p className="italic mb-2">“I improved my math skills in just a few weeks. Highly recommend for students!”</p>
            <span className="font-semibold">— Student, UK</span>
          </div>
        </div>
      </section> 

      {/* 4️⃣ Pricing / Plans */}
      <section className="py-16 bg-white">
        <h2 className="text-3xl font-bold text-center mb-10">Choose Your Plan</h2>
        <div className="flex flex-col md:flex-row justify-center gap-8 max-w-5xl mx-auto">
          <div className="border rounded-lg p-8 flex-1 text-center shadow bg-yellow-50">
            <h3 className="text-xl font-bold mb-2">Basic</h3>
            <p className="mb-4">Access basic AI companions and lessons</p>
            <div className="text-3xl font-bold mb-4">$0</div>
            <Button>Get Started</Button>
          </div>
          <div className="border-2 border-blue-500 rounded-lg p-8 flex-1 text-center shadow bg-blue-50">
            <h3 className="text-xl font-bold mb-2">Platinum</h3>
            <p className="mb-4">Unlock all subjects, advanced features, and platinum support</p>
            <div className="text-3xl font-bold mb-4">$20</div>
            <Button>Start Platinum</Button>
          </div>
          <div className="border-2 border-yellow-500 rounded-lg p-8 flex-1 text-center shadow bg-yellow-100">
            <h3 className="text-xl font-bold mb-2">Gold</h3>
            <p className="mb-4">Unlock all subjects, advanced features, and gold support</p>
            <div className="text-3xl font-bold mb-4">$40</div>
            <Button>Start Gold</Button>
          </div>
        </div>
      </section>

      {/* 5️⃣ FAQ */}
      <section className="py-16 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-10">Frequently Asked Questions</h2>
        <div className="max-w-2xl mx-auto">
          <Accordion type="single" collapsible>
            <AccordionItem value="q1">
              <AccordionTrigger>What is EduVoxa?</AccordionTrigger>
              <AccordionContent>
                EduVoxa is an AI-powered platform offering personalized learning companions for students of all ages.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="q2">
              <AccordionTrigger>Is there a free plan?</AccordionTrigger>
              <AccordionContent>
                Yes! You can start learning with basic features for free, and upgrade anytime for more benefits.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="q3">
              <AccordionTrigger>How do I get started?</AccordionTrigger>
              <AccordionContent>
                Simply click "Sign In" above, sign up, and choose your learning companion!
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* 6️⃣ Final CTA Banner */}
      <section className="py-12 bg-gradient-to-r from-yellow-200 to-pink-200 flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold mb-4 text-center">Ready to start your learning journey?</h2>
        <Button className="text-lg px-8 py-4">Join EduVoxa Now</Button>
      </section>

      {/* Original Companions Section */}
      <h1 className="mt-16">EduVoxa Companions</h1>
      <section className="home-section">
        {companions.map((companion) => (
          <CompanionCard
            key={companion.id}
            {...companion}
            color={getSubjectColor(companion.subject)}
          />
        ))}
      </section>
      <section className="home-section">
        <CompanionList
          title="Recently completed sessions"
          companions={recentSessionsCompanions}
          classNames="w-2/3 max-lg:w-full"
        />
        <CTA />
      </section>

      {/* 7️⃣ Footer */}
      <footer className="py-8 bg-gray-900 text-white text-center mt-8">
        <div className="mb-2">&copy; {new Date().getFullYear()} EduVoxa. All rights reserved.</div>
        <div className="flex justify-center gap-4 text-gray-400 text-sm">
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Terms of Service</a>
          <a href="#" className="hover:underline">Contact</a>
        </div>
      </footer>

    </main>
  )
}

export default Page