import { NavigationBar } from '../../components/navigation/NavigationBar';
import { Footer } from '../../components/footer/Footer';

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <NavigationBar />
      {children}
      <Footer />
    </div>
  );
}
