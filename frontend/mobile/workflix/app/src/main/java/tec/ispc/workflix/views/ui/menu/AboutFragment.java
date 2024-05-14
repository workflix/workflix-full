package tec.ispc.workflix.views.ui.menu;

import android.content.Intent;
import android.net.Uri;
import android.os.Bundle;
import androidx.fragment.app.Fragment;
import android.media.MediaPlayer;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.MediaController;
import android.widget.TextView;
import android.widget.VideoView;

import tec.ispc.workflix.R;
import tec.ispc.workflix.views.ui.video.videoRaw;

public class AboutFragment extends Fragment {
    private VideoView videoView;
    private int position = -1;
    private MediaController mediaController;

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container, Bundle savedInstanceState) {
        View view = inflater.inflate(R.layout.fragment_about, container, false);

        videoView = view.findViewById(R.id.video_view);

        // Reproduce el video
        playVideo();


        TextView linkTextView = view.findViewById(R.id.linkTextView);

        linkTextView.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                String url = "https://acceso.ispc.edu.ar/login/index.php";
                Intent intent = new Intent(Intent.ACTION_VIEW, Uri.parse(url));
                startActivity(intent);
            }
        });

        return view;
    }

    private void playVideo() {
        String path = "android.resource://" + requireActivity().getPackageName() + "/" + R.raw.worflixvideo;
        videoView.setVideoURI(Uri.parse(path));
        videoView.start();

        if (mediaController == null) {
            mediaController = new MediaController(requireActivity());
            mediaController.setAnchorView(videoView);
            videoView.setMediaController(mediaController);
        }

        videoView.setOnPreparedListener(new MediaPlayer.OnPreparedListener() {
            @Override
            public void onPrepared(MediaPlayer mp) {
                if (position == -1) {
                    videoView.start();
                } else {
                    videoView.seekTo(position);
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