'use client';
import { PRODUCTS } from '@/utils/const';
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ProductList: React.FC = () => {
	const [ref, inView] = useInView({
		triggerOnce: true,
		threshold: 0.1,
	});

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: { opacity: 1, transition: { staggerChildren: 0.5 } },
	};

	const cardVariants = {
		hidden: { opacity: 0, y: 50 },
		visible: { opacity: 1, y: 0 },
	};

	return (
		<section className='min-h-screen py-20 px-5 md:px-10'>
			<motion.div
				className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10'
				variants={containerVariants}
				initial='hidden'
				animate={inView ? 'visible' : 'hidden'}
				ref={ref}
			>
				{PRODUCTS.map((service, index) => (
					<motion.div
						key={index}
						className='p-4 rounded shadow text-center cursor-pointer bg-purple-100 dark:bg-purple-800'
						variants={cardVariants}
					>
						<h3 className='text-xl font-bold mb-5'>
							{service.title}
						</h3>
						<p>{service.description}</p>
					</motion.div>
				))}
			</motion.div>
		</section>
	);
};

export default ProductList;
