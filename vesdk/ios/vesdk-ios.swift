import VideoEditorSDK

let video = Video(url: Bundle.main.url(forResource: "sample_video", withExtension: "mp4")!)

let videoEditViewController = VideoEditViewController(videoAsset: video)
videoEditViewController.delegate = self

present(videoEditViewController, animated: true, completion: nil)
