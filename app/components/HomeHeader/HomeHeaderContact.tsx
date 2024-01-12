type HomeHeaderContactProps = {
  mail: string;
  phone: string;
  phoneToShow: string;
};

export const HomeHeaderContact = ({
  mail,
  phone,
  phoneToShow,
}: HomeHeaderContactProps) => {
  return (
    <div className="flex flex-col gap-0.5 text-sm text-gray-600">
      <a href={`mailto:${mail}`} className="hover:text-blue-600">
        ✉️&nbsp;&nbsp;{mail}
      </a>
      <a href={`tel:${phone}`} className="hover:text-blue-600">
        📞&nbsp;&nbsp;{phoneToShow}
      </a>
    </div>
  );
};
