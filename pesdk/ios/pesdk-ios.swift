import PhotoEditorSDK

let image = UIImage(named: "example")!
let photo = Photo(image: image)

let photoEditViewController = PhotoEditViewController(photoAsset: photo)
photoEditViewController.delegate = self

present(photoEditViewController, animated: true, completion: nil)
