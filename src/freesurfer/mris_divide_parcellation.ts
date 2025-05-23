// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const MRIS_DIVIDE_PARCELLATION_METADATA: Metadata = {
    id: "eb4ef7e4768c5312c5386818b3df847302db121f.boutiques",
    name: "mris_divide_parcellation",
    package: "freesurfer",
    container_image_tag: "freesurfer/freesurfer:7.4.1",
};


interface MrisDivideParcellationParameters {
    "__STYXTYPE__": "mris_divide_parcellation";
    "subject": string;
    "hemi": string;
    "sourceannot": InputPathType;
    "splitfile_or_areathresh": string;
    "outannot": string;
    "scale"?: number | null | undefined;
    "label_name"?: string | null | undefined;
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
        "mris_divide_parcellation": mris_divide_parcellation_cargs,
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
        "mris_divide_parcellation": mris_divide_parcellation_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `mris_divide_parcellation(...)`.
 *
 * @interface
 */
interface MrisDivideParcellationOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * The resulting annotation file with divided labels.
     */
    outannot_file: OutputPathType;
}


function mris_divide_parcellation_params(
    subject: string,
    hemi: string,
    sourceannot: InputPathType,
    splitfile_or_areathresh: string,
    outannot: string,
    scale: number | null = null,
    label_name: string | null = null,
): MrisDivideParcellationParameters {
    /**
     * Build parameters.
    
     * @param subject The subject identifier.
     * @param hemi The hemisphere identifier, e.g., left (lh) or right (rh).
     * @param sourceannot The source annotation file.
     * @param splitfile_or_areathresh Either a splitfile specifying divisions or an area threshold in mm^2.
     * @param outannot The output annotation file name.
     * @param scale Specify offset scaling for rgb values (default=20).
     * @param label_name Only process the label <label name> (not implemented yet).
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "mris_divide_parcellation" as const,
        "subject": subject,
        "hemi": hemi,
        "sourceannot": sourceannot,
        "splitfile_or_areathresh": splitfile_or_areathresh,
        "outannot": outannot,
    };
    if (scale !== null) {
        params["scale"] = scale;
    }
    if (label_name !== null) {
        params["label_name"] = label_name;
    }
    return params;
}


function mris_divide_parcellation_cargs(
    params: MrisDivideParcellationParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("mris_divide_parcellation");
    cargs.push((params["subject"] ?? null));
    cargs.push((params["hemi"] ?? null));
    cargs.push(execution.inputFile((params["sourceannot"] ?? null)));
    cargs.push((params["splitfile_or_areathresh"] ?? null));
    cargs.push((params["outannot"] ?? null));
    if ((params["scale"] ?? null) !== null) {
        cargs.push(
            "-scale",
            String((params["scale"] ?? null))
        );
    }
    if ((params["label_name"] ?? null) !== null) {
        cargs.push(
            "-l",
            (params["label_name"] ?? null)
        );
    }
    return cargs;
}


function mris_divide_parcellation_outputs(
    params: MrisDivideParcellationParameters,
    execution: Execution,
): MrisDivideParcellationOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: MrisDivideParcellationOutputs = {
        root: execution.outputFile("."),
        outannot_file: execution.outputFile([(params["outannot"] ?? null)].join('')),
    };
    return ret;
}


function mris_divide_parcellation_execute(
    params: MrisDivideParcellationParameters,
    execution: Execution,
): MrisDivideParcellationOutputs {
    /**
     * Divides one or more parcellations into divisions perpendicular to the long axis of the label.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `MrisDivideParcellationOutputs`).
     */
    params = execution.params(params)
    const cargs = mris_divide_parcellation_cargs(params, execution)
    const ret = mris_divide_parcellation_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function mris_divide_parcellation(
    subject: string,
    hemi: string,
    sourceannot: InputPathType,
    splitfile_or_areathresh: string,
    outannot: string,
    scale: number | null = null,
    label_name: string | null = null,
    runner: Runner | null = null,
): MrisDivideParcellationOutputs {
    /**
     * Divides one or more parcellations into divisions perpendicular to the long axis of the label.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param subject The subject identifier.
     * @param hemi The hemisphere identifier, e.g., left (lh) or right (rh).
     * @param sourceannot The source annotation file.
     * @param splitfile_or_areathresh Either a splitfile specifying divisions or an area threshold in mm^2.
     * @param outannot The output annotation file name.
     * @param scale Specify offset scaling for rgb values (default=20).
     * @param label_name Only process the label <label name> (not implemented yet).
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `MrisDivideParcellationOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(MRIS_DIVIDE_PARCELLATION_METADATA);
    const params = mris_divide_parcellation_params(subject, hemi, sourceannot, splitfile_or_areathresh, outannot, scale, label_name)
    return mris_divide_parcellation_execute(params, execution);
}


export {
      MRIS_DIVIDE_PARCELLATION_METADATA,
      MrisDivideParcellationOutputs,
      MrisDivideParcellationParameters,
      mris_divide_parcellation,
      mris_divide_parcellation_params,
};
