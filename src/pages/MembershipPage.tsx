import { useState, type FormEvent } from 'react'
import { PageHero } from '../components/Layout'
import { membershipPlans } from '../content'
import { submitMembership } from '../api'

const fieldClass =
  'rounded-2xl border border-line bg-ink px-5 py-4 text-lg text-white outline-none focus:border-mint'

export function MembershipPage() {
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    setError('')
    setLoading(true)
    try {
      await submitMembership({
        name: String(data.get('name') || ''),
        email: String(data.get('email') || ''),
        affiliation: String(data.get('affiliation') || ''),
        category: String(data.get('category') || ''),
      })
      setSent(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Could not submit registration.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <PageHero
        kicker="Membership"
        title="Apply for Membership"
        subtitle="Complete this form to request Student or Professional membership, or to be considered for a merit-based grade. GIDIS will review applications and follow up by email."
        image="/images/hero-ai-cyber.png"
      />

      <section className="mx-auto max-w-7xl space-y-12 px-5 py-20">
        <article className="glass rounded-[2rem] p-10">
          <h2 className="headline text-4xl text-white">How to join</h2>
          <ol className="mt-8 space-y-4 text-lg leading-8 text-fog/80">
            <li>1. Register using the form on this page.</li>
            <li>2. Verify the email by clicking the link sent to your registered email ID.</li>
            <li>3. Log in and apply for the selected membership category.</li>
          </ol>
        </article>

        <div>
          <h2 className="headline text-4xl text-white md:text-5xl">Fee structure</h2>
          <p className="mt-5 max-w-4xl text-lg leading-8 text-fog/80">
            Researchers can join the institute in the following categories. Fees are listed in New
            Taiwan Dollars (NT$) and may be paid online, by credit card, or by bank transfer to
            the institute’s account.
          </p>
          <div className="mt-8 overflow-x-auto rounded-[2rem] border border-line">
            <table className="w-full min-w-[640px] text-left text-lg">
              <thead className="bg-white/5 text-fog/70">
                <tr>
                  <th className="px-6 py-5 font-medium">Category</th>
                  <th className="px-6 py-5 font-medium">Fee</th>
                  <th className="px-6 py-5 font-medium">Notes</th>
                </tr>
              </thead>
              <tbody>
                {membershipPlans.map((plan) => (
                  <tr key={plan.duration} className="border-t border-line">
                    <td className="px-6 py-5 text-white">{plan.duration}</td>
                    <td className="px-6 py-5 text-xl text-gold">{plan.fee}</td>
                    <td className="px-6 py-5 text-fog/70">{plan.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <article className="rounded-[2rem] border border-line p-10">
            <h2 className="headline text-4xl text-white">Terms and conditions</h2>
            <ul className="mt-8 space-y-4 text-lg leading-8 text-fog/80">
              <li>Members of GIDIS are expected to support the aims, mission, and professional standards of the Institute.</li>
              <li>Membership fees, once paid, are not refundable except as provided in the published refund policy.</li>
              <li>
                The Governing Council may accept or decline an application in accordance with the
                membership bylaws.
              </li>
              <li>
                Membership may be withdrawn if a member is found to act against the Institute’s
                aims, ethics, or professional conduct policy.
              </li>
            </ul>
            <p className="mt-8 text-base text-fog/55">
              Other policies: refund and cancellation as stated above. Shipping policy is not
              applicable.
            </p>
          </article>

          <article className="glass rounded-[2rem] p-10">
            <h2 className="headline text-4xl text-white">Register</h2>
            {sent ? (
              <p className="mt-8 text-lg leading-8 text-mint">
                Thank you. Your registration request has been recorded. The GIDIS team will review
                it and follow up by email.
              </p>
            ) : (
              <form className="mt-8 grid gap-5" onSubmit={onSubmit}>
                <label className="grid gap-2 text-base">
                  <span className="text-fog/70">Full name</span>
                  <input required name="name" className={fieldClass} />
                </label>
                <label className="grid gap-2 text-base">
                  <span className="text-fog/70">Email</span>
                  <input required type="email" name="email" className={fieldClass} />
                </label>
                <label className="grid gap-2 text-base">
                  <span className="text-fog/70">Affiliation</span>
                  <input required name="affiliation" className={fieldClass} />
                </label>
                <label className="grid gap-2 text-base">
                  <span className="text-fog/70">Membership category</span>
                  <select name="category" className={fieldClass}>
                    {membershipPlans.map((plan) => (
                      <option key={plan.duration} value={plan.duration}>
                        {plan.duration}
                      </option>
                    ))}
                  </select>
                </label>
                {error ? <p className="text-base text-red-300">{error}</p> : null}
                <button
                  type="submit"
                  disabled={loading}
                  className="mt-2 rounded-full bg-mint px-7 py-3.5 text-lg font-semibold text-ink disabled:opacity-60"
                >
                  {loading ? 'Submitting…' : 'Submit registration'}
                </button>
              </form>
            )}
          </article>
        </div>
      </section>
    </>
  )
}
