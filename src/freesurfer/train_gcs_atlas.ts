// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const TRAIN_GCS_ATLAS_METADATA: Metadata = {
    id: "94c89e1dfe3d6f19edd5cc1f4b3eeb93c181a16d.boutiques",
    name: "train-gcs-atlas",
    package: "freesurfer",
    container_image_tag: "freesurfer/freesurfer:7.4.1",
};


interface TrainGcsAtlasParameters {
    "__STYXTYPE__": "train-gcs-atlas";
    "manual_parcellation"?: string | null | undefined;
    "subjlist_file"?: InputPathType | null | undefined;
    "left_hemi": boolean;
    "right_hemi": boolean;
    "hemi_spec"?: string | null | undefined;
    "output_gcs": string;
    "surf_reg"?: InputPathType | null | undefined;
    "color_table"?: InputPathType | null | undefined;
    "exclude_subject"?: string | null | undefined;
    "jackknife_flag": boolean;
    "aseg_filename"?: string | null | undefined;
    "threads"?: number | null | undefined;
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
        "train-gcs-atlas": train_gcs_atlas_cargs,
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
        "train-gcs-atlas": train_gcs_atlas_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `train_gcs_atlas(...)`.
 *
 * @interface
 */
interface TrainGcsAtlasOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Output GCS file produced by training
     */
    output_gcs_file: OutputPathType;
}


function train_gcs_atlas_params(
    output_gcs: string,
    manual_parcellation: string | null = null,
    subjlist_file: InputPathType | null = null,
    left_hemi: boolean = false,
    right_hemi: boolean = false,
    hemi_spec: string | null = null,
    surf_reg: InputPathType | null = null,
    color_table: InputPathType | null = null,
    exclude_subject: string | null = null,
    jackknife_flag: boolean = false,
    aseg_filename: string | null = null,
    threads: number | null = null,
): TrainGcsAtlasParameters {
    /**
     * Build parameters.
    
     * @param output_gcs Output GCS file
     * @param manual_parcellation Manual parcellation; default is aparc_edited
     * @param subjlist_file File containing the list of subjects
     * @param left_hemi Left hemisphere processing
     * @param right_hemi Right hemisphere processing
     * @param hemi_spec Specify hemisphere for processing
     * @param surf_reg Surface registration file; default is sphere.reg
     * @param color_table Color table file
     * @param exclude_subject Exclude a subject from the atlas
     * @param jackknife_flag Submit a job for each subject excluding it
     * @param aseg_filename Aseg filename; default is aseg.auto.mgz
     * @param threads Number of threads to use
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "train-gcs-atlas" as const,
        "left_hemi": left_hemi,
        "right_hemi": right_hemi,
        "output_gcs": output_gcs,
        "jackknife_flag": jackknife_flag,
    };
    if (manual_parcellation !== null) {
        params["manual_parcellation"] = manual_parcellation;
    }
    if (subjlist_file !== null) {
        params["subjlist_file"] = subjlist_file;
    }
    if (hemi_spec !== null) {
        params["hemi_spec"] = hemi_spec;
    }
    if (surf_reg !== null) {
        params["surf_reg"] = surf_reg;
    }
    if (color_table !== null) {
        params["color_table"] = color_table;
    }
    if (exclude_subject !== null) {
        params["exclude_subject"] = exclude_subject;
    }
    if (aseg_filename !== null) {
        params["aseg_filename"] = aseg_filename;
    }
    if (threads !== null) {
        params["threads"] = threads;
    }
    return params;
}


function train_gcs_atlas_cargs(
    params: TrainGcsAtlasParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("train-gcs-atlas");
    if ((params["manual_parcellation"] ?? null) !== null) {
        cargs.push(
            "--man",
            (params["manual_parcellation"] ?? null)
        );
    }
    if ((params["subjlist_file"] ?? null) !== null) {
        cargs.push(
            "--f",
            execution.inputFile((params["subjlist_file"] ?? null))
        );
    }
    if ((params["left_hemi"] ?? null)) {
        cargs.push("--lh");
    }
    if ((params["right_hemi"] ?? null)) {
        cargs.push("--rh");
    }
    if ((params["hemi_spec"] ?? null) !== null) {
        cargs.push(
            "--hemi",
            (params["hemi_spec"] ?? null)
        );
    }
    cargs.push(
        "--o",
        (params["output_gcs"] ?? null)
    );
    if ((params["surf_reg"] ?? null) !== null) {
        cargs.push(
            "--reg",
            execution.inputFile((params["surf_reg"] ?? null))
        );
    }
    if ((params["color_table"] ?? null) !== null) {
        cargs.push(
            "--ctab",
            execution.inputFile((params["color_table"] ?? null))
        );
    }
    if ((params["exclude_subject"] ?? null) !== null) {
        cargs.push(
            "--x",
            (params["exclude_subject"] ?? null)
        );
    }
    if ((params["jackknife_flag"] ?? null)) {
        cargs.push("--jackknife");
    }
    if ((params["aseg_filename"] ?? null) !== null) {
        cargs.push(
            "--aseg",
            (params["aseg_filename"] ?? null)
        );
    }
    if ((params["threads"] ?? null) !== null) {
        cargs.push(
            "--threads",
            String((params["threads"] ?? null))
        );
    }
    return cargs;
}


function train_gcs_atlas_outputs(
    params: TrainGcsAtlasParameters,
    execution: Execution,
): TrainGcsAtlasOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: TrainGcsAtlasOutputs = {
        root: execution.outputFile("."),
        output_gcs_file: execution.outputFile([(params["output_gcs"] ?? null)].join('')),
    };
    return ret;
}


function train_gcs_atlas_execute(
    params: TrainGcsAtlasParameters,
    execution: Execution,
): TrainGcsAtlasOutputs {
    /**
     * Script to train a surface-based gaussian classifier for cortical surface parcellation.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `TrainGcsAtlasOutputs`).
     */
    params = execution.params(params)
    const cargs = train_gcs_atlas_cargs(params, execution)
    const ret = train_gcs_atlas_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function train_gcs_atlas(
    output_gcs: string,
    manual_parcellation: string | null = null,
    subjlist_file: InputPathType | null = null,
    left_hemi: boolean = false,
    right_hemi: boolean = false,
    hemi_spec: string | null = null,
    surf_reg: InputPathType | null = null,
    color_table: InputPathType | null = null,
    exclude_subject: string | null = null,
    jackknife_flag: boolean = false,
    aseg_filename: string | null = null,
    threads: number | null = null,
    runner: Runner | null = null,
): TrainGcsAtlasOutputs {
    /**
     * Script to train a surface-based gaussian classifier for cortical surface parcellation.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param output_gcs Output GCS file
     * @param manual_parcellation Manual parcellation; default is aparc_edited
     * @param subjlist_file File containing the list of subjects
     * @param left_hemi Left hemisphere processing
     * @param right_hemi Right hemisphere processing
     * @param hemi_spec Specify hemisphere for processing
     * @param surf_reg Surface registration file; default is sphere.reg
     * @param color_table Color table file
     * @param exclude_subject Exclude a subject from the atlas
     * @param jackknife_flag Submit a job for each subject excluding it
     * @param aseg_filename Aseg filename; default is aseg.auto.mgz
     * @param threads Number of threads to use
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `TrainGcsAtlasOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(TRAIN_GCS_ATLAS_METADATA);
    const params = train_gcs_atlas_params(output_gcs, manual_parcellation, subjlist_file, left_hemi, right_hemi, hemi_spec, surf_reg, color_table, exclude_subject, jackknife_flag, aseg_filename, threads)
    return train_gcs_atlas_execute(params, execution);
}


export {
      TRAIN_GCS_ATLAS_METADATA,
      TrainGcsAtlasOutputs,
      TrainGcsAtlasParameters,
      train_gcs_atlas,
      train_gcs_atlas_params,
};
