import { ArrowRight } from 'lucide-react';

const TEAM_PROFILES = [
  { id: 1, src: '/profiles/profile-1.png', alt: 'Brixline team member' },
  { id: 2, src: '/profiles/profile-2.png', alt: 'Brixline team member' },
  { id: 3, src: '/profiles/profile-3.png', alt: 'Brixline team member' },
  { id: 4, src: '/profiles/profile-4.png', alt: 'Brixline team member' },
];

export function ProfileAvatarStack() {
  return (
    <div className="flex w-full max-w-full flex-col items-center gap-4 sm:flex-row sm:flex-nowrap sm:justify-center sm:gap-4">
      <div className="flex shrink-0 items-center justify-center pl-0.5">
        {TEAM_PROFILES.map((profile, index) => (
          <div
            key={profile.id}
            className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full border-2 border-white bg-gray-200 shadow-md ring-1 ring-gray-100"
            style={{
              marginLeft: index === 0 ? 0 : '-1.25rem',
              zIndex: TEAM_PROFILES.length - index,
            }}
          >
            <img
              src={profile.src}
              alt={profile.alt}
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>

      <button
        type="button"
        className="inline-flex w-full max-w-xs shrink-0 items-center justify-center gap-2 rounded-xl bg-black px-6 py-3.5 text-base font-bold text-white shadow-xl shadow-black/10 transition-all hover:scale-[1.01] active:scale-[0.99] sm:w-auto sm:max-w-none"
      >
        Get In Touch
        <ArrowRight className="h-5 w-5" strokeWidth={2.5} />
      </button>
    </div>
  );
}
