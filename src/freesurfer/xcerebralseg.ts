// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const XCEREBRALSEG_METADATA: Metadata = {
    id: "5fb80211d047813ad88a87144a02240628a74311.boutiques",
    name: "xcerebralseg",
    package: "freesurfer",
    container_image_tag: "freesurfer/freesurfer:7.4.1",
};


interface XcerebralsegParameters {
    "__STYXTYPE__": "xcerebralseg";
    "subject": string;
    "output_volume"?: string | null | undefined;
    "atlas"?: string | null | undefined;
    "mergevol"?: string | null | undefined;
    "source_volume"?: string | null | undefined;
    "no_stats": boolean;
    "seg1_name"?: string | null | undefined;
    "no_pons": boolean;
    "no_vermis": boolean;
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
        "xcerebralseg": xcerebralseg_cargs,
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
        "xcerebralseg": xcerebralseg_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `xcerebralseg(...)`.
 *
 * @interface
 */
interface XcerebralsegOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Output volume file for the whole head segmentation
     */
    output_volume_file: OutputPathType;
}


function xcerebralseg_params(
    subject: string,
    output_volume: string | null = "apas+head.mgz",
    atlas: string | null = "/usr/local/freesurfer/average/aseg+spmhead+vermis+pons.ixi.gca",
    mergevol: string | null = "aparc+aseg.mgz",
    source_volume: string | null = "nu.mgz",
    no_stats: boolean = false,
    seg1_name: string | null = null,
    no_pons: boolean = false,
    no_vermis: boolean = false,
    threads: number | null = null,
): XcerebralsegParameters {
    /**
     * Build parameters.
    
     * @param subject Subject identifier (required)
     * @param output_volume Output volume file (default: apas+head.mgz)
     * @param atlas Atlas file path (default: /usr/local/freesurfer/average/aseg+spmhead+vermis+pons.ixi.gca)
     * @param mergevol Merge with mergevol (default: aparc+aseg.mgz)
     * @param source_volume Source intensity volume (default: nu.mgz)
     * @param no_stats Do not run mri_segstats
     * @param seg1_name Full-head segmentation name (usually computed with mri_ca_label)
     * @param no_pons Exclude pons segmentation
     * @param no_vermis Exclude vermis segmentation
     * @param threads Set number of OPENMP threads
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "xcerebralseg" as const,
        "subject": subject,
        "no_stats": no_stats,
        "no_pons": no_pons,
        "no_vermis": no_vermis,
    };
    if (output_volume !== null) {
        params["output_volume"] = output_volume;
    }
    if (atlas !== null) {
        params["atlas"] = atlas;
    }
    if (mergevol !== null) {
        params["mergevol"] = mergevol;
    }
    if (source_volume !== null) {
        params["source_volume"] = source_volume;
    }
    if (seg1_name !== null) {
        params["seg1_name"] = seg1_name;
    }
    if (threads !== null) {
        params["threads"] = threads;
    }
    return params;
}


function xcerebralseg_cargs(
    params: XcerebralsegParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("xcerebralseg");
    cargs.push(
        "--s",
        (params["subject"] ?? null)
    );
    if ((params["output_volume"] ?? null) !== null) {
        cargs.push(
            "--o",
            (params["output_volume"] ?? null)
        );
    }
    if ((params["atlas"] ?? null) !== null) {
        cargs.push(
            "--atlas",
            (params["atlas"] ?? null)
        );
    }
    if ((params["mergevol"] ?? null) !== null) {
        cargs.push(
            "--m",
            (params["mergevol"] ?? null)
        );
    }
    if ((params["source_volume"] ?? null) !== null) {
        cargs.push(
            "--srcvol",
            (params["source_volume"] ?? null)
        );
    }
    if ((params["no_stats"] ?? null)) {
        cargs.push("--no-stats");
    }
    if ((params["seg1_name"] ?? null) !== null) {
        cargs.push(
            "--seg1",
            (params["seg1_name"] ?? null)
        );
    }
    if ((params["no_pons"] ?? null)) {
        cargs.push("--no-pons");
    }
    if ((params["no_vermis"] ?? null)) {
        cargs.push("--no-vermis");
    }
    if ((params["threads"] ?? null) !== null) {
        cargs.push(
            "--threads",
            String((params["threads"] ?? null))
        );
    }
    return cargs;
}


function xcerebralseg_outputs(
    params: XcerebralsegParameters,
    execution: Execution,
): XcerebralsegOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: XcerebralsegOutputs = {
        root: execution.outputFile("."),
        output_volume_file: execution.outputFile(["apas+head.mgz"].join('')),
    };
    return ret;
}


function xcerebralseg_execute(
    params: XcerebralsegParameters,
    execution: Execution,
): XcerebralsegOutputs {
    /**
     * Tool for labeling extracerebral structures including sulcal CSF, skull/bone, head soft tissue, and air inside the head, merged with aparc+aseg.mgz segmentation for a whole head segmentation.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `XcerebralsegOutputs`).
     */
    params = execution.params(params)
    const cargs = xcerebralseg_cargs(params, execution)
    const ret = xcerebralseg_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function xcerebralseg(
    subject: string,
    output_volume: string | null = "apas+head.mgz",
    atlas: string | null = "/usr/local/freesurfer/average/aseg+spmhead+vermis+pons.ixi.gca",
    mergevol: string | null = "aparc+aseg.mgz",
    source_volume: string | null = "nu.mgz",
    no_stats: boolean = false,
    seg1_name: string | null = null,
    no_pons: boolean = false,
    no_vermis: boolean = false,
    threads: number | null = null,
    runner: Runner | null = null,
): XcerebralsegOutputs {
    /**
     * Tool for labeling extracerebral structures including sulcal CSF, skull/bone, head soft tissue, and air inside the head, merged with aparc+aseg.mgz segmentation for a whole head segmentation.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param subject Subject identifier (required)
     * @param output_volume Output volume file (default: apas+head.mgz)
     * @param atlas Atlas file path (default: /usr/local/freesurfer/average/aseg+spmhead+vermis+pons.ixi.gca)
     * @param mergevol Merge with mergevol (default: aparc+aseg.mgz)
     * @param source_volume Source intensity volume (default: nu.mgz)
     * @param no_stats Do not run mri_segstats
     * @param seg1_name Full-head segmentation name (usually computed with mri_ca_label)
     * @param no_pons Exclude pons segmentation
     * @param no_vermis Exclude vermis segmentation
     * @param threads Set number of OPENMP threads
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `XcerebralsegOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(XCEREBRALSEG_METADATA);
    const params = xcerebralseg_params(subject, output_volume, atlas, mergevol, source_volume, no_stats, seg1_name, no_pons, no_vermis, threads)
    return xcerebralseg_execute(params, execution);
}


export {
      XCEREBRALSEG_METADATA,
      XcerebralsegOutputs,
      XcerebralsegParameters,
      xcerebralseg,
      xcerebralseg_params,
};
