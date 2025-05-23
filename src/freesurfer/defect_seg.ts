// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const DEFECT_SEG_METADATA: Metadata = {
    id: "9b31a7d103732cf28fbea5f8fb3d389448877d3a.boutiques",
    name: "defect-seg",
    package: "freesurfer",
    container_image_tag: "freesurfer/freesurfer:7.4.1",
};


interface DefectSegParameters {
    "__STYXTYPE__": "defect-seg";
    "subject": string;
    "lh_only": boolean;
    "rh_only": boolean;
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
        "defect-seg": defect_seg_cargs,
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
        "defect-seg": defect_seg_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `defect_seg(...)`.
 *
 * @interface
 */
interface DefectSegOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Surface defects volume.
     */
    surface_defects: OutputPathType;
    /**
     * Summary of defects indicating numerical ID and number of vertices.
     */
    defects_summary: OutputPathType;
    /**
     * Fixed defect labels on the surface.
     */
    defect_labels_fix: OutputPathType;
    /**
     * Binary labels for fixed defects.
     */
    defect_labels_fix_bin: OutputPathType;
    /**
     * Annotation file for defects without fixes.
     */
    defects_nofix_annot: OutputPathType;
    /**
     * Annotation file for defects with fixes.
     */
    defects_fix_annot: OutputPathType;
    /**
     * Statistics summary of defects indicating area and average thickness.
     */
    defects_stats: OutputPathType;
}


function defect_seg_params(
    subject: string,
    lh_only: boolean = false,
    rh_only: boolean = false,
): DefectSegParameters {
    /**
     * Build parameters.
    
     * @param subject Subject identifier.
     * @param lh_only Only process the left hemisphere.
     * @param rh_only Only process the right hemisphere.
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "defect-seg" as const,
        "subject": subject,
        "lh_only": lh_only,
        "rh_only": rh_only,
    };
    return params;
}


function defect_seg_cargs(
    params: DefectSegParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("defect-seg");
    cargs.push(
        "--s",
        (params["subject"] ?? null)
    );
    if ((params["lh_only"] ?? null)) {
        cargs.push("--lh-only");
    }
    if ((params["rh_only"] ?? null)) {
        cargs.push("--rh-only");
    }
    return cargs;
}


function defect_seg_outputs(
    params: DefectSegParameters,
    execution: Execution,
): DefectSegOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: DefectSegOutputs = {
        root: execution.outputFile("."),
        surface_defects: execution.outputFile(["mri/surface.defects.mgz"].join('')),
        defects_summary: execution.outputFile(["scripts/?h.defects.summary"].join('')),
        defect_labels_fix: execution.outputFile(["surf/?h.defect_labels.fix.mgz"].join('')),
        defect_labels_fix_bin: execution.outputFile(["surf/?h.defect_labels.fix.bin.mgz"].join('')),
        defects_nofix_annot: execution.outputFile(["label/?h.defects.nofix.annot"].join('')),
        defects_fix_annot: execution.outputFile(["label/?h.defects.fix.annot"].join('')),
        defects_stats: execution.outputFile(["stats/?h.defects.stats"].join('')),
    };
    return ret;
}


function defect_seg_execute(
    params: DefectSegParameters,
    execution: Execution,
): DefectSegOutputs {
    /**
     * This program creates some files that allows the user to visualize and evaluate the surface defects that were automatically detected and fixed by the topology correction program.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `DefectSegOutputs`).
     */
    params = execution.params(params)
    const cargs = defect_seg_cargs(params, execution)
    const ret = defect_seg_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function defect_seg(
    subject: string,
    lh_only: boolean = false,
    rh_only: boolean = false,
    runner: Runner | null = null,
): DefectSegOutputs {
    /**
     * This program creates some files that allows the user to visualize and evaluate the surface defects that were automatically detected and fixed by the topology correction program.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param subject Subject identifier.
     * @param lh_only Only process the left hemisphere.
     * @param rh_only Only process the right hemisphere.
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `DefectSegOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(DEFECT_SEG_METADATA);
    const params = defect_seg_params(subject, lh_only, rh_only)
    return defect_seg_execute(params, execution);
}


export {
      DEFECT_SEG_METADATA,
      DefectSegOutputs,
      DefectSegParameters,
      defect_seg,
      defect_seg_params,
};
