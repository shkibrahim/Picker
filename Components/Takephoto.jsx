const takePhotos = async () => {
    if (camera !== null) {
      try {
        const photo = await camera.current?.takePhoto({
          qualityPrioritization: 'quality',

          enableAutoRedEyeReduction: true,
        });

        if (photo && photo.path) {
          const base64Image = await RNFS.readFile(photo.path, 'base64');

          setpath(photo);
          setShowDownloadIcon(true);
          setshowcamera(true);
          setCapturedImage(`data:image/jpeg;base64,${base64Image}`);
        } else {
          console.error('Invalid photo object:', photo);
        }
      } catch (error) {
        console.error('Error taking photo:', error);
      }
    }
  };