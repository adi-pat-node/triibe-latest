import Header from "@/components/header";
import Footer from "@/components/footer";

export default function PrivacyPage() {
  return (
    <main className="bg-white min-h-screen">
      <Header />

      <section className="pt-32 pb-20 px-4 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Privacy Policy
          </h1>
          
          <div className="text-sm text-[#495565] mb-12">
            <p><strong>Last updated:</strong> May 15, 2026</p>
            <p><strong>Last reviewed:</strong> May 15, 2026</p>
          </div>

          <div className="space-y-12 text-[#495565] text-base md:text-lg leading-relaxed">
            <p className="text-lg md:text-xl font-medium text-black">
              At TRIIBE, we believe trust is earned through transparency. This policy explains what we collect, how we use it, and the commitments we make to everyone who shares their information with us.
            </p>

            <hr className="border-gray-200" />

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-black">What we collect</h2>
              <p>When you participate in the TRIIBE Index, fellowship applications, or other TRIIBE programs, we collect the information you choose to share with us. This may include your name, email address, age, gender, location, education, role, organizational context, and other details relevant to your work in the third sector.</p>
              <p>Some of this information is sensitive, including details about identity, background, and lived experience. We treat it with the care it deserves.</p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-black">Our legal basis for collecting your data</h2>
              <p>We collect and process your personal data based on the explicit consent you provide when you submit a TRIIBE form. You can withdraw this consent at any time by contacting us.</p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-black">How we use it</h2>
              <p>Your individual responses stay private. We don't share them publicly, sell them, or pass them to third parties for marketing purposes.</p>
              <p>We use your information to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Build aggregate, anonymized insights about next-gen leaders and the third sector</li>
                <li>Publish reports, datasets, and narratives that reflect the collective story, never individual identities</li>
                <li>Inform TRIIBE's advisory and consultancy work with funders, foundations, donor-advised funds, and other partners seeking to better allocate resources to the third sector</li>
                <li>Operate TRIIBE programs you've engaged with directly</li>
                <li>Send updates and annual reminders to participants who have opted in</li>
              </ul>
              <p>When we publish, share, or sell anything derived from the Index or our other datasets, it is always in aggregate, anonymized form. No individual is ever identifiable in our outputs. We do not sell, share, or disclose your personal information to third parties for their own use.</p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-black">Email communications</h2>
              <p>If you opt in, we may use your email to send you TRIIBE updates and an annual reminder to update your data. You can unsubscribe at any time using the link in any email or by contacting us at <a href="mailto:privacy@triibe.org" className="text-blue-600 hover:underline">privacy@triibe.org</a>.</p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-black">Where it lives</h2>
              <p>TRIIBE collects and stores form responses through Logictry, which provides the form infrastructure embedded on <a href="https://triibe.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">triibe.org</a>. Logictry processes your data solely on TRIIBE's instructions, under a signed Data Processing Agreement, and does not use your data for its own marketing, advertising, or profiling purposes.</p>
              <p>Our website is hosted by Vercel, with code maintained on GitHub. These providers do not access your form responses; they only support the systems that deliver our site to you.</p>
              <p>We do not share your data with any third parties beyond these technical service providers.</p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-black">How long we keep it</h2>
              <p>We retain your individual responses for three years from your last interaction with TRIIBE. After that, your individual data is deleted from our active systems.</p>
              <p>Aggregate, anonymized insights derived from your data — published in reports, used in our advisory work, or maintained in our anonymized dataset — may be retained indefinitely, as they no longer identify you personally.</p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-black">Participants under 18</h2>
              <p>TRIIBE welcomes participants of all ages who can legally provide consent. To protect young participants:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>The TRIIBE Index is open to participants aged 13 and older. Anyone under 13 cannot submit a TRIIBE Index response. If a participant under 13 has submitted personal data through our forms, contact us at <a href="mailto:privacy@triibe.org" className="text-blue-600 hover:underline">privacy@triibe.org</a> and we will delete it.</li>
                <li>Participants aged 13 to 17 must confirm that they are 13 or older, able to provide consent in their country, and that a parent or guardian is aware of their participation.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-black">International data transfers</h2>
              <p>TRIIBE is based in the United States. If you submit data from outside the US, your information will be transferred to and stored in the United States. By submitting, you consent to this transfer.</p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-black">In the event of a data breach</h2>
              <p>If your personal data is compromised in a breach, TRIIBE will notify you and the relevant authorities within 72 hours of discovering the breach, in line with GDPR requirements. We will share what happened, what data was affected, and what we're doing about it.</p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-black">Your rights</h2>
              <p>You have the right to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access the personal information TRIIBE holds about you</li>
                <li>Update or correct your information</li>
                <li>Request deletion of your information from our records</li>
                <li>Withdraw your consent for future use</li>
                <li>Receive a copy of your data in a portable format</li>
                <li>Lodge a complaint with your local data protection authority</li>
              </ul>
              <p>To exercise any of these rights, email <a href="mailto:privacy@triibe.org" className="text-blue-600 hover:underline">privacy@triibe.org</a>.</p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-black">California residents (CCPA)</h2>
              <p>If you live in California, you have additional rights under the California Consumer Privacy Act:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>The right to know what personal information we collect about you and how we use it</li>
                <li>The right to request deletion of your personal information</li>
                <li>The right to opt out of any sale of your personal information</li>
              </ul>
              <p>TRIIBE does not sell personal information. We have not sold personal information in the past, and we have no plans to do so.</p>
              <p>To exercise your CCPA rights, email <a href="mailto:privacy@triibe.org" className="text-blue-600 hover:underline">privacy@triibe.org</a>.</p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-black">Cookies and website data</h2>
              <p>Our website uses minimal cookies to keep the site running and understand how visitors find us. We don't use cookies to track you across the internet or build advertising profiles.</p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-black">Changes to this policy</h2>
              <p>If we update this policy, we'll post the new version here with a revised date. Significant changes will be communicated to anyone whose data is materially affected.</p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-black">Contact us</h2>
              <p>Questions, requests, or concerns: <a href="mailto:privacy@triibe.org" className="text-blue-600 hover:underline">privacy@triibe.org</a>.</p>
            </section>

            <div className="pt-8 border-t border-gray-200 text-black">
              <p>With gratitude,<br />
              <strong>The TRIIBE Team</strong></p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}