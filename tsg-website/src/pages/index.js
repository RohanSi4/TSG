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
