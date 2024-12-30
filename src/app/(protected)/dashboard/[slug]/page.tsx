"use client";

import DoubleGradientCard from '@/components/global/double-gradient-card';
import { DASHBOARD_CARDS } from '@/constants/dashboard';
import { BarDuoToneBlue } from '@/icons';
import React from 'react';
import { motion } from 'framer-motion';
import Chart from './_components/chart';
// import Chart from './_components/metrics'
// import MetricsCard from './_components/metrics/metrics-card'

type Props = {};

const Page = (props: Props) => {
  return (
    <div className="flex flex-col gap-y-10">
      {/* Animated Card Section */}
      <motion.div
        className="flex gap-5 lg:flex-row flex-col"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, staggerChildren: 0.2 }}
      >
        {DASHBOARD_CARDS.map((card) => (
          <motion.div
            key={card.id}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.3 },
            }}
            className="cursor-pointer"
          >
            <DoubleGradientCard {...card} />
          </motion.div>
        ))}
      </motion.div>

      {/* Automated Activity Section */}
      <motion.div
        className="border-[1px] relative border-in-active/50 px-2 py-3 rounded-xl"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.span
          className="flex gap-x-1 z-50 items-center cursor-pointer"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <BarDuoToneBlue />
          <div className="z-50">
            <h2 className="text-base font-medium text-white">Automated Activity</h2>
            <p className="text-text-secondary text-sm">
              Automated 0 out of 1 interactions
            </p>
          </div>
        </motion.span>
        <motion.div
          className="w-full flex lg:flex-row flex-col gap-5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="lg:w-6/12 cursor-pointer"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <Chart />
          </motion.div>
          <motion.div
            className="lg:w-6/12 cursor-pointer"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            {/* <MetricsCard /> */}
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Page;
