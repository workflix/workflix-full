package tec.ispc.workflix.views.ui.video;

import androidx.appcompat.app.AppCompatActivity;

import android.media.MediaPlayer;
import android.net.Uri;
import android.os.Bundle;
import android.widget.MediaController;
import android.widget.VideoView;

import tec.ispc.workflix.R;

public class videoRaw extends AppCompatActivity {

    VideoView videoView;

    int position = -0;
    MediaController mediaController;



    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_video_raw);

        videoView = findViewById(R.id.video_view);

        String path="android.resource://"+getPackageName()+"/"+R.raw.worflixvideo;

        videoView.setVideoURI(Uri.parse(path));
        videoView.start();

        if (this.mediaController ==null) {
            this.mediaController = new MediaController(videoRaw.this);

            this.mediaController.setAnchorView(videoView);
            this.videoView.setMediaController(mediaController);
        }

        this.videoView.setOnPreparedListener(new MediaPlayer.OnPreparedListener() {
            @Override
            public void onPrepared(MediaPlayer mp) {
                videoView.seekTo(position);
                if (position == 0) {
                    videoView.start();
                }

                mp.setOnVideoSizeChangedListener(new MediaPlayer.OnVideoSizeChangedListener() {
                    @Override
                    public void onVideoSizeChanged(MediaPlayer mp, int width, int height) {
                        mediaController.setAnchorView(videoView);
                    }
                });
            }
        });
    }
}