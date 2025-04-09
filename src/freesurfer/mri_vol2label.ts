// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const MRI_VOL2LABEL_METADATA: Metadata = {
    id: "e96f5a0ae21d22dfa1a0424a0ee90b67c8953101.boutiques",
    name: "mri_vol2label",
    package: "freesurfer",
    container_image_tag: "freesurfer/freesurfer:7.4.1",
};


interface MriVol2labelParameters {
    "__STYXTYPE__": "mri_vol2label";
    "input": InputPathType;
    "label_id"?: number | null | undefined;
    "threshold"?: number | null | undefined;
    "label_file": string;
    "vol_file"?: string | null | undefined;
    "surf_subject_hemi"?: string | null | undefined;
    "surf_path"?: string | null | undefined;
    "opt_params"?: string | null | undefined;
    "remove_holes": boolean;
    "dilations"?: number | null | undefined;
    "erosions"?: number | null | undefined;
    "help": boolean;
}


function dynCargs(
    t: string,
): Function | undefined {
    /**
     * Get build cargs function by command type.
    
     * @param t Command type
    
     * @returns Build cargs function.
     */
    const cargsFuncs = {
        "mri_vol2label": mri_vol2label_cargs,
    };
    return cargsFuncs[t];
}


function dynOutputs(
    t: string,
): Function | undefined {
    /**
     * Get build outputs function by command type.
    
     * @param t Command type
    
     * @returns Build outputs function.
     */
    const outputsFuncs = {
        "mri_vol2label": mri_vol2label_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `mri_vol2label(...)`.
 *
 * @interface
 */
interface MriVol2labelOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Generated label file.
     */
    output_label_file: OutputPathType;
    /**
     * Generated label volume file.
     */
    output_volume_file: OutputPathType | null;
}


function mri_vol2label_params(
    input: InputPathType,
    label_file: string,
    label_id: number | null = null,
    threshold: number | null = null,
    vol_file: string | null = null,
    surf_subject_hemi: string | null = null,
    surf_path: string | null = null,
    opt_params: string | null = null,
    remove_holes: boolean = false,
    dilations: number | null = null,
    erosions: number | null = null,
    help: boolean = false,
): MriVol2labelParameters {
    /**
     * Build parameters.
    
     * @param input Input volume or surface overlay.
     * @param label_file Name of output label file.
     * @param label_id Value to match in the input.
     * @param threshold Threshold the input to make label (i.e., input > threshold) instead of using Label ID.
     * @param vol_file Write label volume in this file.
     * @param surf_subject_hemi Interpret input as surface overlay with the given subject and hemisphere (optionally with surface).
     * @param surf_path Specify surface path instead of subject/hemi.
     * @param opt_params Treats input as a probability map. Format: target delta valmap.
     * @param remove_holes Remove holes in label and islands (with --surf only).
     * @param dilations Dilate label (with --surf only).
     * @param erosions Erode label (with --surf only).
     * @param help Print out help information.
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "mri_vol2label" as const,
        "input": input,
        "label_file": label_file,
        "remove_holes": remove_holes,
        "help": help,
    };
    if (label_id !== null) {
        params["label_id"] = label_id;
    }
    if (threshold !== null) {
        params["threshold"] = threshold;
    }
    if (vol_file !== null) {
        params["vol_file"] = vol_file;
    }
    if (surf_subject_hemi !== null) {
        params["surf_subject_hemi"] = surf_subject_hemi;
    }
    if (surf_path !== null) {
        params["surf_path"] = surf_path;
    }
    if (opt_params !== null) {
        params["opt_params"] = opt_params;
    }
    if (dilations !== null) {
        params["dilations"] = dilations;
    }
    if (erosions !== null) {
        params["erosions"] = erosions;
    }
    return params;
}


function mri_vol2label_cargs(
    params: MriVol2labelParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("mri_vol2label");
    cargs.push(
        "--i",
        execution.inputFile((params["input"] ?? null))
    );
    if ((params["label_id"] ?? null) !== null) {
        cargs.push(
            "--id",
            String((params["label_id"] ?? null))
        );
    }
    if ((params["threshold"] ?? null) !== null) {
        cargs.push(
            "--thresh",
            String((params["threshold"] ?? null))
        );
    }
    cargs.push(
        "--l",
        (params["label_file"] ?? null)
    );
    if ((params["vol_file"] ?? null) !== null) {
        cargs.push(
            "--v",
            (params["vol_file"] ?? null)
        );
    }
    if ((params["surf_subject_hemi"] ?? null) !== null) {
        cargs.push(
            "--surf",
            (params["surf_subject_hemi"] ?? null)
        );
    }
    if ((params["surf_path"] ?? null) !== null) {
        cargs.push(
            "--surf-path",
            (params["surf_path"] ?? null)
        );
    }
    if ((params["opt_params"] ?? null) !== null) {
        cargs.push(
            "--opt",
            (params["opt_params"] ?? null)
        );
    }
    if ((params["remove_holes"] ?? null)) {
        cargs.push("--remove-holes-islands");
    }
    if ((params["dilations"] ?? null) !== null) {
        cargs.push(
            "--dilate",
            String((params["dilations"] ?? null))
        );
    }
    if ((params["erosions"] ?? null) !== null) {
        cargs.push(
            "--erode",
            String((params["erosions"] ?? null))
        );
    }
    if ((params["help"] ?? null)) {
        cargs.push("--help");
    }
    return cargs;
}


function mri_vol2label_outputs(
    params: MriVol2labelParameters,
    execution: Execution,
): MriVol2labelOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: MriVol2labelOutputs = {
        root: execution.outputFile("."),
        output_label_file: execution.outputFile([(params["label_file"] ?? null)].join('')),
        output_volume_file: ((params["vol_file"] ?? null) !== null) ? execution.outputFile([(params["vol_file"] ?? null)].join('')) : null,
    };
    return ret;
}


function mri_vol2label_execute(
    params: MriVol2labelParameters,
    execution: Execution,
): MriVol2labelOutputs {
    /**
     * Converts values in a volume or surface overlay to a label using specified parameters.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `MriVol2labelOutputs`).
     */
    params = execution.params(params)
    const cargs = mri_vol2label_cargs(params, execution)
    const ret = mri_vol2label_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function mri_vol2label(
    input: InputPathType,
    label_file: string,
    label_id: number | null = null,
    threshold: number | null = null,
    vol_file: string | null = null,
    surf_subject_hemi: string | null = null,
    surf_path: string | null = null,
    opt_params: string | null = null,
    remove_holes: boolean = false,
    dilations: number | null = null,
    erosions: number | null = null,
    help: boolean = false,
    runner: Runner | null = null,
): MriVol2labelOutputs {
    /**
     * Converts values in a volume or surface overlay to a label using specified parameters.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param input Input volume or surface overlay.
     * @param label_file Name of output label file.
     * @param label_id Value to match in the input.
     * @param threshold Threshold the input to make label (i.e., input > threshold) instead of using Label ID.
     * @param vol_file Write label volume in this file.
     * @param surf_subject_hemi Interpret input as surface overlay with the given subject and hemisphere (optionally with surface).
     * @param surf_path Specify surface path instead of subject/hemi.
     * @param opt_params Treats input as a probability map. Format: target delta valmap.
     * @param remove_holes Remove holes in label and islands (with --surf only).
     * @param dilations Dilate label (with --surf only).
     * @param erosions Erode label (with --surf only).
     * @param help Print out help information.
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `MriVol2labelOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(MRI_VOL2LABEL_METADATA);
    const params = mri_vol2label_params(input, label_file, label_id, threshold, vol_file, surf_subject_hemi, surf_path, opt_params, remove_holes, dilations, erosions, help)
    return mri_vol2label_execute(params, execution);
}


export {
      MRI_VOL2LABEL_METADATA,
      MriVol2labelOutputs,
      MriVol2labelParameters,
      mri_vol2label,
      mri_vol2label_params,
};
