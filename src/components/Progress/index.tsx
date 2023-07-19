export interface IProgress {
  label: string;
  percentage: number;
}

export const Progress: React.FC<IProgress> = ({ label, percentage }) => {
  return (
    <>
      <span className='text-sm'>{label}</span>
      <div className='relative mt-2 border-main-400 border-2 border-solid rounded-full h-6 w-full'>
        <div
          style={{ width: `${percentage}%` }}
          className={`h-full bg-main-400 border-2 border-solid border-white rounded-full`}
        />
        <div className='absolute top-0.5 w-full flex justify-center text-sm'>
          {percentage}%
        </div>
      </div>
    </>
  );
};
