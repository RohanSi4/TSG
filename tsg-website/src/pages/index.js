import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';
import React, { useState } from 'react';

function HomepageHeader() {
    const { siteConfig } = useDocusaurusContext();
    return (
        <header className={clsx('hero hero--primary', styles.heroBanner)}>
            <div className="container">
                <Heading as="h1" className="hero__title">
                    Welcome to the Technology Strategy Group
                </Heading>
                <p className="hero__subtitle">
                    Empowering businesses at UVA and beyond with cutting-edge tech solutions.
                </p>
                <div className={styles.buttons}>
                    <Link
                        className="button button--secondary button--lg"
                        to="#client-form">
                        Work With Us
                    </Link>
                </div>
            </div>
        </header>
    );
}

function AboutUs() {
    return (
        <section className={styles.aboutUsSection}>
            <div className="container">
                <h2>About TSG</h2>
                <div className={styles.aboutUsSubsection}>
                    <h3>Who We Are</h3>
                    <p>
                        The Technology Strategy Group (TSG) is a student-led consulting organization at the University of Virginia.
                        Our team consists of passionate problem-solvers specializing in technology-driven solutions.
                    </p>
                </div>
                <div className={styles.aboutUsSubsection}>
                    <h3>Our Mission</h3>
                    <p>
                        Our mission is to empower small businesses with innovative technology strategies that drive growth and efficiency.
                        We are dedicated to providing professional-grade consulting services while developing future leaders in technology and business.
                    </p>
                </div>
                <div className={styles.aboutUsSubsection}>
                    <h3>What We Offer</h3>
                    <p>
                    TSG offers customized consulting services, including IT strategy, software development, and digital transformation solutions.
                    <p></p>
                    What sets TSG apart is our unwavering commitment to understanding the unique challenges and goals of each client. By blending innovative technologies with a client-first approach, we deliver impactful results that align with your specific needs.
                    <p></p>
                    At TSG, we prioritize building strong, lasting relationships because we know that successful partnerships are rooted in trust, collaboration, and a deep understanding of your business. Your success is our priority, and we’re here to guide you every step of the way 
                    </p>
                </div>
            </div>
        </section>
    );
}

function ClientForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5001/api/companies', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                alert('Thank you for reaching out! We will get back to you shortly.');
                setFormData({ name: '', email: '', company: '', message: '' });
            } else {
                alert('Failed to submit the form. Please try again.');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('An error occurred. Please try again later.');
        }
    };

    return (
        <section id="client-form" className={styles.clientFormSection}>
            <div className="container">
                <h2>Contact Us</h2>
                <p>Interested in partnering with the Technology Strategy Group? Share your details below:</p>
                <form className={styles.clientForm} onSubmit={handleSubmit}>
                    <div>
                        <label>
                            Name:
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </label>
                    </div>
                    <div>
                        <label>
                            Email:
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </label>
                    </div>
                    <div>
                        <label>
                            Company/Organization:
                            <input
                                type="text"
                                name="company"
                                value={formData.company}
                                onChange={handleChange}
                            />
                        </label>
                    </div>
                    <div>
                        <label>
                            Message/Project Details:
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows="5"
                                required
                            />
                        </label>
                    </div>
                    <button type="submit" className="button button--primary button--lg">
                        Submit
                    </button>
                </form>
            </div>
        </section>
    );
}

export default function Home() {
    const { siteConfig } = useDocusaurusContext();
    return (
        <Layout
            title="Technology Strategy Group | UVA"
            description="Empowering businesses with tech solutions at UVA and beyond. Contact us to learn more.">
            <HomepageHeader />
            <main>
                <ClientForm />
            </main>
        </Layout>
    );
}
