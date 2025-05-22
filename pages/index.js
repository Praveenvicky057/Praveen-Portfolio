
import React from "react";
import { Card, CardContent } from "../components/ui/card";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import Head from "next/head";

export default function Home() {
  return (
    <main className="bg-gray-950 text-white min-h-screen font-sans">
      <Head>
        <title>Praveen Kumar A - QA Automation Engineer</title>
        <meta name="description" content="Portfolio of Praveen Kumar A, QA Automation Engineer specializing in Selenium, Java, and CI/CD automation." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="flex flex-col items-center justify-center py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="w-32 h-32 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 animate-pulse mb-4" />
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Praveen Kumar A</h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-6">
            QA Automation Engineer
          </p>
          <div className="flex gap-4 justify-center">
            <a href="https://linkedin.com/in/apraveen-kumar" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={30} />
            </a>
            <a href="https://github.com/Praveenvicky057" target="_blank" rel="noopener noreferrer">
              <FaGithub size={30} />
            </a>
          </div>
        </motion.div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-10 grid gap-6">
        <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
          <h2 className="text-3xl font-semibold mb-2">About</h2>
          <p className="text-gray-300">
            I’m a software tester with 4 years of experience in both manual and automation testing.
            Skilled in Java, Selenium WebDriver, TestNG, and CI/CD tools like Jenkins. Experienced in
            SQL, Agile methodologies, and test management using Azure Boards.
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
          <h2 className="text-3xl font-semibold mb-2">Skills</h2>
          <ul className="list-disc list-inside text-gray-300">
            <li>Java, SQL</li>
            <li>Selenium WebDriver, TestNG</li>
            <li>Azure Repo, Git, Jenkins</li>
            <li>Functional, Regression, and Smoke Testing</li>
            <li>Oracle DB, Eclipse IDE</li>
          </ul>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
          <h2 className="text-3xl font-semibold mb-2">Experience</h2>
          <div className="space-y-4">
            <Card>
              <CardContent className="p-4">
                <h3 className="text-xl font-semibold">Infosys Limited | Test Analyst</h3>
                <p className="text-sm text-gray-400">Sep 2024 - Present | Chennai, India</p>
                <ul className="list-disc list-inside text-gray-300 mt-2">
                  <li>Built automation scripts using Selenium WebDriver + Java</li>
                  <li>Framework: TestNG, reports, and DB automation</li>
                  <li>Reduced test prep time by 50% via SQL optimization</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <h3 className="text-xl font-semibold">Capgemini | Test Engineer</h3>
                <p className="text-sm text-gray-400">Jun 2021 - Aug 2024 | Chennai, India</p>
                <ul className="list-disc list-inside text-gray-300 mt-2">
                  <li>Created 300+ Selenium WebDriver test scripts</li>
                  <li>Reduced defect leakage by 70%</li>
                  <li>Integrated Jenkins and Azure Boards for CI/CD</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
