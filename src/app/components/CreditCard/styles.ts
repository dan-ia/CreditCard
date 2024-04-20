import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  flagsPosition: {
    marginTop: 30,
  },

  titleFlag: {
    fontSize: 14,
    textAlign: 'center',
  },
  flags: {
    justifyContent: 'center',
    alignItems: "center",
    width: '100%',
    height: 60,
    flexDirection: 'row',
    gap: 10,
  },
  card: {
    width: '100%',
    height: 200,
    borderRadius: 12,
    padding: 18,
    justifyContent: 'space-between',
  },
  front: {
    backfaceVisibility: 'hidden',
    position: 'absolute',
    backgroundColor: '#202020',
  },

  masterCard: {
    backfaceVisibility: 'hidden',
    backgroundColor: '#909090',
    position: 'absolute',
  },

  visaCard: {
    backfaceVisibility: 'hidden',
    backgroundColor: '#003563',
    position: 'absolute',
  },
  eloCard: {
    backfaceVisibility: 'hidden',
    backgroundColor: '#010101',
    position: 'absolute',
  },
  amexCard: {
    backfaceVisibility: 'hidden',
    backgroundColor: '#010101',
    position: 'absolute',
  },

  back: {
    backfaceVisibility: 'hidden',
    backgroundColor: '#202020'
  },
  flagImage: {
    borderRadius: 12,
    justifyContent: 'space-between',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4
  },
  headerElo: {
    justifyContent: 'flex-end',
    flexDirection: 'row',
    alignItems: 'center',
  },

  headerAmerican: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4
  },
  logoMasterCard: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  logoElo: {
    width: 90,
    height: 30,
  },
  logoVisa: {
    width: 70,
    height: 30,
    resizeMode: 'contain',
  },
  logoAmex: {
    width: 120,
    height: 50,
    resizeMode: 'cover',
  },

  value: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#fff',
    paddingBottom: 10,
  },

  valueMaster: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#1C1C1C',
    paddingBottom: 10,

  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  headerBack: {
    gap: 8
  },
  label: {
    color: '#80868b',
    fontSize: 18,
  },
});